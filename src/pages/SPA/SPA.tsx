import React from 'react';
import styled from 'styled-components';
import TitleBlock from './TitleBlock';
import AboutMeBlock from './AboutMeBlock';
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

type SPAProps = {};

function SPA(props: SPAProps) {

    return (
        <SiteContainer>
            <TitleBlock />
            <AboutMeBlock />
            <ProfessionalProfileBlock />
            <ExperienceBlock />
            <MyValuesBlock />
        </SiteContainer>
    );
}

export default SPA;
