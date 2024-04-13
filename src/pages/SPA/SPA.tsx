import React from 'react';
import styled from 'styled-components';
import TitleBlock from './TitleBlock';
import AIAssistant from './AIAssistant';
import MyValuesBlock from './MyValuesBlock';
import ExperienceBlock from './ExperienceBlock';
import ProfessionalProfileBlock from './ProfessionalProfile';

const SiteContainer = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

// type SPAProps = {};

function SPA () {

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
