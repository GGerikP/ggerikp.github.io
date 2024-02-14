import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ProportionalScrollElement from '../../components/ProportionalScrollElement';
//import ProfilePicLookingDown from './images/profile-pic-looking-down.png';
import LargeTitleWhite from './images/title-gerikpeterson-white-large.png';
import ProfilePicSF from './images/profile-seth-kendra-me-sf.jpg';

const Container = styled.div`
    width: 100%;
`

const ProfilePicContainer = styled.div`
    height: 90vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
`

const ProfilePicFullPage = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url(${ProfilePicSF});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    @media (width > 1300px) {
        background-position-y: 65%;
    }
`

const TitleContainer = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: flex-end;
`
const LargeTitle = styled.img`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    position: absolute; 
    margin: auto;
    @media (orientation: portrait) {
        bottom: 15vh;
    }
    @media (width > ${theme.breakpoints.tablet}) {
        bottom: 0px;
    }
`

function TitleBlock() {
    return (
        <Container>
            <ProfilePicContainer>
                <ProportionalScrollElement scrollPercentage={.25}>
                    <ProfilePicFullPage />
                </ProportionalScrollElement>
            </ProfilePicContainer>
            <TitleContainer id="title">
                <LargeTitle src={LargeTitleWhite} />
            </TitleContainer>
        </Container>
    )
}

export default TitleBlock;