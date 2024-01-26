// NavigationBar.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import theme from '../theme';
import GerikPetersonLogo from './images/gerik-peterson-logo.png';

// Styled components
const NavBarContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 50px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const StyledLink = styled(Link)`
  &&& {
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    color: black;

    &:hover {
      color: #ddd;
    }
  }
`;

const Logo = styled.h1`
  cursor: pointer;
  height: 100%;
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
  padding-top: 1rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #333;
    display: none;

    &.active {
      display: flex;
    }
  }
`;

type NavigationBarProps = {};

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <NavBarContainer>
      <NavBar>
        <Logo as={Link} to="/"><img src={GerikPetersonLogo} alt="Site Logo"/></Logo>
        <NavItems className={mobileMenuActive ? 'active' : ''}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItems>
        <HamburgerIcon name="bars" size="large" onClick={toggleMobileMenu} />
      </NavBar>
      <MobileMenu className={mobileMenuActive ? 'active' : ''}>
        <StyledLink to="/" onClick={() => setMobileMenuActive(false)}>Home</StyledLink>
        <StyledLink to="/about" onClick={() => setMobileMenuActive(false)}>About</StyledLink>
        <StyledLink to="/services" onClick={() => setMobileMenuActive(false)}>Services</StyledLink>
        <StyledLink to="/contact" onClick={() => setMobileMenuActive(false)}>Contact</StyledLink>
      </MobileMenu>
    </NavBarContainer>
  );
};


export default NavigationBar;
