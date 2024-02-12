import React from 'react';
import styled from 'styled-components';
import TitleBlock from './TitleBlock';
import AboutMeBlock from './AboutMeBlock';
import MyValuesBlock from './MyValuesBlock';
import ExperienceBlock from './ExperienceBlock';

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
            <ExperienceBlock />
            <MyValuesBlock />
        </SiteContainer>
    );
}

export default SPA;
