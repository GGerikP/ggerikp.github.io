import React from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';
import Error404NotFoundPage from './pages/Error404NotFoundPage';
import SPA from './pages/SPA';
import Footer from './components/Footer';

// Define global styles using createGlobalStyle
const GlobalStyle = createGlobalStyle`
    h1, h2, h3, h4, h5 {
      font-family: 'Rye, monospace, Helvetica, Arial, sans-serif';
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
    background-color: ${theme.colors.tertiaryAccent};
`;

function App () {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<SPA />} />
            <Route path="*" element={<Error404NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </StyledApp>
    </>

  );
}

export default App;
