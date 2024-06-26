import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import ReactGA from 'react-ga4';
import Link from './Link';

const CookieConsentModalContainer = styled.div<{$showComponent : boolean}>`
    z-index: 15;
    padding: 5px;
    position: fixed;
    top: 75px;
    width: 250px;
    right: ${(props) => (props.$showComponent ? '25px' : '-250px')};
    background-color: ${theme.colors.secondaryAccent};
    border: 1px solid black;
    transition: right 1s ease-in-out;
    overflow: hidden;
`;

const ConsentTextContainer = styled.div`
    width: 100%;
    padding: 5px;
    overflow: auto;
`;

const CloseButton = styled.i`
    float: right;
    width: 19px;
    height: 19px;
    margin: -2px 0px -2px 5px;
    cursor:pointer;
`;

const ConsentText = styled.p`
    text-align: justify;
    font-size: 14px;
`;

const ConsentButton = styled.button`
    font-size: 14px;
    border: none;
    border-radius: 3px;
    text-decoration: underline;
    background-color: transparent;
    cursor:pointer;
`;

const DeclineButton = styled.button`
    font-size: 14px;
    border: none;
    border-radius: 3px;
    text-decoration: underline;
    background-color: transparent;
    cursor:pointer;
`;


const CookieConsentModal = () => {

  const [showModal, setShowModal] = useState<boolean | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean | null>(null);

  const initializeGoogleAnalytics = () => {
    ReactGA.initialize('G-MNXW69WQ1V');
  };

  useEffect(() => {
    const savedPreference = localStorage.getItem('gaConsent');
    if (savedPreference === null) {
      setShowModal(true);
    } else {
      setHasAnswered(true);
      if (savedPreference === 'true') {
        initializeGoogleAnalytics();
      }
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('gaConsent', 'true');
    initializeGoogleAnalytics();
    setHasAnswered(true);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('gaConsent', 'false');
    setHasAnswered(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal &&
      <CookieConsentModalContainer $showComponent={!hasAnswered}>
        <ConsentTextContainer>
          <CloseButton className="fa fa-window-close" aria-hidden="true" onClick={hideModal}></CloseButton>
          <ConsentText>By using our site you agree to our use of cookies and google analytics to deliver a better site experience.  Read more on our <Link url="/privacy-policy" target="_self">privacy policy</Link>.</ConsentText>
          <ConsentButton onClick={handleAcceptCookies}>I understand.</ConsentButton>
          <DeclineButton onClick={handleDeclineCookies}>No, thank you.</DeclineButton>
        </ConsentTextContainer>
      </CookieConsentModalContainer>
      }
    </>
  );
};

export default CookieConsentModal;