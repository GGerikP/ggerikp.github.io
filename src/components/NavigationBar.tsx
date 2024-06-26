// NavigationBar.tsx
import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import theme from '../theme';
import GerikPetersonLogo from './images/gerik-peterson-logo.png';
import { useOnClickOutside } from 'usehooks-ts';
import SiteIcon from './images/icon-mowser-192.png';

// Styled components
const NavBarContainer = styled.div`
  background: linear-gradient(to bottom, rgba(255,240,209,1) 75%, rgba(255,240,209,0));
  width: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 60px;
  /*border-bottom: solid 1px black;*/
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
`;

const StyledLink = styled(HashLink)`
  &&& {
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    color: black;
    padding-right: 10px;
    padding-left: 10px;
    border-right: 1px solid black;
    font-weight: 500;

    &:hover {
      color: #ddd;
    }
  }
`;

const StyledMobileLink = styled(HashLink)`
  &&& {
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    color: black;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    &:hover {
      color: #ddd;
    }
  }
`;

const NavBarIcon = styled.img`
  cursor: pointer;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-right: solid 1px black;
  margin-right: 10px;
`;

const NavBarLogo = styled.img`
  cursor: pointer;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
`;

const Logo = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const HamburgerIcon = styled(Icon)`
  &&& {
    display: none;
    padding-right: 1rem;
    line-height: 25px;

    @media (max-width: ${theme.breakpoints.tablet}) {
      display: block;
      cursor: pointer;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  padding-top: 10px;
  height: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${theme.colors.secondaryAccent};
    display: none;
    border: 1px solid black;

    &.active {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      height: auto;
      transition: height 1s ease-in-out;
    }
  }
`;

function NavigationBar () {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const insideOutsideRefElement = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAnchor = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) => {
    event.preventDefault();
    const [path, anchor] = hash.split('#');
    if (location.pathname !== path) {
      // Navigate and then scroll after navigation has occurred
      navigate(path);
      setTimeout(() => {
        const element = document.querySelector(`#${anchor}`);
        if (element) {
          const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
          const yOffset = -60;
          window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
        }
      }, 0);
    } else {
      const element = document.querySelector(`#${anchor}`);
      if (element) {
        const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
        const yOffset = -60;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const handleMobileAnchorLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, hash: string) => {
    toggleMobileMenu();
    scrollToAnchor(event, hash);
  };

  const handleClickOutside = () => {
    // Your custom logic here
    setMobileMenuActive(false);
  };
  useOnClickOutside(insideOutsideRefElement, handleClickOutside);

  return (
    <NavBarContainer ref={insideOutsideRefElement} id="NavigationBar">
      <NavBar>
        <Logo as={HashLink} to="/#title">
          <NavBarIcon title="mow" src={SiteIcon} alt="Site Icon"/>
          <NavBarLogo src={GerikPetersonLogo} alt="Site Logo" />
          {/*<NavBarTitle>Gerik Peterson</NavBarTitle>*/}
        </Logo>
        <NavItems className={mobileMenuActive ? 'active' : ''}>
          <StyledLink to="/#title" onClick={(event) => scrollToAnchor(event, '#title')}>Home</StyledLink>
          <StyledLink to="/#ai-assistant" onClick={(event) => scrollToAnchor(event, '#ai-assistant')}>AI Assistant</StyledLink>
          <StyledLink to="/#professionalprofile" onClick={(event) => scrollToAnchor(event, '#professionalprofile')}>Profile</StyledLink>
          <StyledLink to="/#cv" onClick={(event) => scrollToAnchor(event, '#cv')}>Experience</StyledLink>
          <StyledLink to="/#values" onClick={(event) => scrollToAnchor(event, '#values')}>Values</StyledLink>
        </NavItems>
        <HamburgerIcon name="bars" size="large" onClick={toggleMobileMenu} />
      </NavBar>
      <MobileMenu className={mobileMenuActive ? 'active' : ''}>
        <StyledMobileLink to="/#title" onClick={(event) => handleMobileAnchorLinkClick(event, '#title')}>Home</StyledMobileLink>
        <StyledMobileLink to="/#ai-assistant" onClick={(event) => handleMobileAnchorLinkClick(event, '#ai-assistant')}>AI Assistant</StyledMobileLink>
        <StyledMobileLink to="/#professionalprofile" onClick={(event) => handleMobileAnchorLinkClick(event, '#professionalprofile')}>Profile</StyledMobileLink>
        <StyledMobileLink to="/#cv" onClick={(event) => handleMobileAnchorLinkClick(event, '#cv')}>Experience</StyledMobileLink>
        <StyledMobileLink to="/#values" onClick={(event) => handleMobileAnchorLinkClick(event, '#values')}>Values</StyledMobileLink>
      </MobileMenu>
    </NavBarContainer>
  );
}


export default NavigationBar;
