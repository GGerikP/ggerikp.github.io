// NavigationBar.tsx
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import theme from '../theme';
import GerikPetersonLogo from './images/gerik-peterson-logo.png';
import Link from './Link';
import { useOnClickOutside } from 'usehooks-ts'

// Styled components
const NavBarContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 55px;
  border-bottom: solid 1px black;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  &&& {
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    color: black;
    padding-right: 10px;
    padding-left: 10px;
    border-right: 1px solid black;

    &:hover {
      color: #ddd;
      text-decoration: line-through;
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
  padding-top: 10px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    display: none;

    &.active {
      display: flex;
    }
  }
`;

type NavigationBarProps = {};

const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const ref = useRef(null)

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const handleClickOutside = () => {
    // Your custom logic here
    setMobileMenuActive(false);
  }
  useOnClickOutside(ref, handleClickOutside);

  return (
    <NavBarContainer ref={ref} id="NavigationBar">
      <NavBar>
        <Logo as={HashLink} to="/"><img src={GerikPetersonLogo} alt="Site Logo"/></Logo>
        <NavItems className={mobileMenuActive ? 'active' : ''}>
          <StyledLink url="/#title">Home</StyledLink>
          <StyledLink url="/#about">About</StyledLink>
          <StyledLink url="/#cv">Experience</StyledLink>
          <StyledLink url="/#values">Values</StyledLink>
        </NavItems>
        <HamburgerIcon name="bars" size="large" onClick={toggleMobileMenu} />
      </NavBar>
      <MobileMenu className={mobileMenuActive ? 'active' : ''}>
        <StyledLink url="/#title" onClick={() => setMobileMenuActive(false)}>Home</StyledLink>
        <StyledLink url="/#about" onClick={() => setMobileMenuActive(false)}>About</StyledLink>
        <StyledLink url="/#cv" onClick={() => setMobileMenuActive(false)}>Experience</StyledLink>
        <StyledLink url="/#values" onClick={() => setMobileMenuActive(false)}>Values</StyledLink>
      </MobileMenu>
    </NavBarContainer>
  );
};


export default NavigationBar;
