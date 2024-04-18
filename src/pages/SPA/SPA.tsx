import React from 'react';
import styled from 'styled-components';
import TitleBlock from './TitleBlock';
import AIAssistant from './AIAssistant';
import MyValuesBlock from './MyValuesBlock';
import ExperienceBlock from './ExperienceBlock';
import ProfessionalProfileBlock from './ProfessionalProfile';
import usePageTracking from '../../components/Analytics/UsePageTracking';

const SiteContainer = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

function SPA () {

  usePageTracking();

  return (
    <SiteContainer>
      <TitleBlock />
      <AIAssistant />
      <ProfessionalProfileBlock />
      <ExperienceBlock />
      <MyValuesBlock />
    </SiteContainer>
  );
}

export default SPA;
