import React from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/TerminalHomePage';
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';
import theme from './theme';
import Error404NotFoundPage from './pages/Error404NotFoundPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import EngineeringPage from './pages/EngineeringPage';
import ManagerPage from './pages/Manager';
import PoliticsPage from './pages/Politics';
import TravelerPage from './pages/Traveler';
import SingerPage from './pages/Singer';
import PianistPage from './pages/Pianist';
import SPA from './pages/SPA';

const StyledApp = styled.div`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.base};
  font-size: 20px;
  line-height: 25px;      
`

function App() {
  return (
    <StyledApp>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<SPA />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/management" element={<ManagerPage />} />
          <Route path="/political-whatifs" element={<PoliticsPage />} />
          <Route path="/traveler" element={<TravelerPage />} />
          <Route path="/singer" element={<SingerPage />} />
          <Route path="/pianist" element={<PianistPage />} />
          <Route path="*" element={<Error404NotFoundPage />} />
        </Routes>
      </Router>
    </StyledApp>
    );
}

export default App;
