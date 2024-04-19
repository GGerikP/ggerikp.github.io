import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import IconSmallLinkedIn from './images/icon-linkedin-small.svg';
import IconSmallGithub from './images/icon-github-small.svg';
import IconSmallStackOverflow from './images/icon-stackoverflow-small.png';
import IconSmallFacebook from './images/icon-facebook-small.svg';
import theme from '../theme';

const FooterContainer = styled.footer`
    width: 100%;
    border-bottom: solid 1px black;
    background-color: ${theme.colors.secondaryAccent};
    border: 1px solid black;
    margin-top: 20px;
    padding: 10px;
    z-index: 10;
    position: relative;
`;

const SocialMediaContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid 1px black;
`;
const SocialMediaWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const SocialMediaIcon = styled.img`
    height: 75px;
    width: 75px;
`;

const FooterBlurbContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    flex-direction: column;
    text-align: center;
`;

function Footer () {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <SocialMediaWrapper><Link url="https://www.linkedin.com/in/gerikpeterson/" aria-label="Read more about Gerik's LinkedIn profile"><SocialMediaIcon src={IconSmallLinkedIn} alt="LinkedIn"/></Link></SocialMediaWrapper>
        <SocialMediaWrapper><Link url="https://github.com/GGerikP" aria-label="Read more about Gerik's GitHub work"><SocialMediaIcon src={IconSmallGithub} alt="GitHub"/></Link></SocialMediaWrapper>
        <SocialMediaWrapper><Link url="https://stackoverflow.com/users/3187487/gerik" aria-label="Read more about Gerik's Stack Overflow Reputation"><SocialMediaIcon src={IconSmallStackOverflow} alt="Stack Overflow" style={{ border: '2px solid black', borderRadius: '3px', height: '100%' }} /></Link></SocialMediaWrapper>
        <SocialMediaWrapper><Link url="https://www.facebook.com/ggerikp/" aria-label="Read more on Gerik's Facebook page."><SocialMediaIcon src={IconSmallFacebook} alt="Facebook" /></Link></SocialMediaWrapper>
      </SocialMediaContainer>
      <FooterBlurbContainer>
        <p>This site was created by Gerik Peterson.</p>
        <p>Information, data and designs from this website may not be copied or used in any way except for its originally intended purpose.</p>
        <Link url="/privacy-policy"><p>Privacy Policy</p></Link>
      </FooterBlurbContainer>
    </FooterContainer>
  );
}

export default Footer;