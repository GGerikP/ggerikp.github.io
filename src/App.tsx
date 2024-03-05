import React from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import theme from './theme';
import Error404NotFoundPage from './pages/Error404NotFoundPage';
import SPA from './pages/SPA';
import Footer from './components/Footer';

const StyledApp = styled.div`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.base};
  font-size: 20px;
  line-height: 25px;
  height: 100%;
`

function App() {
  return (
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
    );
}

export default App;
