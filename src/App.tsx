import React from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';
import Error404NotFoundPage from './pages/Error404NotFoundPage';
import SPA from './pages/SPA';
import Footer from './components/Footer';
import ProfilePicChicago from './pages/SPA/images/profile-gerikpeterson-large-transp.webp';
import CookieConsentModal from './components/CookieConsentModal';
import PrivacyPolicyPage from './pages/PrivacyPolicy';

// Define global styles using createGlobalStyle
const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5 {
      font-family: 'Lora, monospace, Helvetica, Arial, sans-serif';
      font-weight: 400;
    }
    p, span {
      font-family: 'Lora, monospace, Helvetica, Arial, sans-serif';
    }
    p {
      font-size: 17px;
    }
    border-color: ${theme.colors.primary};
`;

const StyledApp = styled.div`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.base};
    font-size: 20px;
    line-height: 25px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    position: relative;
`;

const BackgroundImage = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(${ProfilePicChicago});
    background-size: 100% 300%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
`;

function App () {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <BackgroundImage />
        <Router>
          <NavigationBar />
          <CookieConsentModal />
          <Routes>
            <Route path="/" element={<SPA />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<Error404NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </StyledApp>
    </>

  );
}

export default App;
