import React from 'react';
import styled from 'styled-components';
import ScrollingPageBlock from '../../components/ScrollingPageBlock';
import ProfilePicLookingDown from './images/profile-pic-looking-down.png';
import LargeTitleImage from './images/large-title.png';

const SiteContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ProfilePic = styled.img`
    width: 100%;
    max-width: 53.6875rem;
    max-height: 71.58331rem;
    flex-shrink: 1;
    float: right;
`

const LargeTitle = styled.img`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    position: absolute; 
    bottom: 150px; 
    margin: auto;
`

const AboutMeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const AboutMeText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 50%;
`

const AboutMeParagraph = styled.p`
    text-align: center;
`

type SPAProps = {};

function SPA(props: SPAProps) {

    return (
        <SiteContainer>
            <ScrollingPageBlock style={{ position: 'fixed', top: '0', left: '0', zIndex: '-1', width: '100%'}}>
                <ProfilePic src={ProfilePicLookingDown} />
            </ScrollingPageBlock>
            <ScrollingPageBlock style={{position: 'relative', top: '0', left: '0'}}>
                <LargeTitle src={LargeTitleImage} />
            </ScrollingPageBlock>
            <ScrollingPageBlock style={{backgroundColor: '#FFEFC6', }}>
                <AboutMeContainer>
                    <AboutMeText>
                        <AboutMeParagraph style={{textAlign: 'center'}}>
                            I have been working in software development for over 15 years.<br />
                            I have been a musician my whole life.<br />
                            And I built this site just to play around with my knowledge and skills.<br />
                            But I'll be honest, I have no idea what to put on this site yet...
                        </AboutMeParagraph>
                    </AboutMeText>
                </AboutMeContainer>
            </ScrollingPageBlock>
        </SiteContainer>
    );
}

export default SPA;
