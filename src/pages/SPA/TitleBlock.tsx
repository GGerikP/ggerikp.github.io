import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ProportionalScrollElement from '../../components/ProportionalScrollElement';
//import ProfilePicLookingDown from './images/profile-pic-looking-down.png';
// import LargeTitleWhite from './images/title-gerikpeterson-white-large.png';
//import ProfilePicSF from './images/profile-seth-kendra-me-sf.jpg';
import ProfilePicChicago from './images/profile-gerikpeterson-large.jpg';
import LinePrinter from '../../components/Printer/LinePrinter';

const TitleBlockContainer = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const ProfilePicContainer = styled.div`
    height: 90vh;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
`;

const ProfilePicFullPage = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url(${ProfilePicChicago});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    @media (width > 1300px) {
        background-position-y: 65%;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 95vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: flex-end;
`;

/*const LargeTitleImage = styled.img`
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    margin: auto;
    @media (orientation: portrait) {
        padding-bottom: 15vh;
    }
    @media (width > ${theme.breakpoints.tablet}) {
        padding-bottom: 0px;
    }
`*/

const LargeTitleText = styled.h1`
    width: 100%;
    text-align: center;
    @media (orientation: portrait) {
        padding-bottom: 15vh;
    };
    @media (width > ${theme.breakpoints.tablet}) {
        padding-bottom: 0;
    };
    font-family: Rye;
    font-weight: 700;
    font-size: 9.25vw;
    line-height: 9vw;
    color: ${theme.colors.textSecondary};
`;

function TitleBlock() {
    return (
        <TitleBlockContainer>
            <ProfilePicContainer>
                <ProportionalScrollElement scrollPercentage={.25}>
                    <ProfilePicFullPage />
                </ProportionalScrollElement>
            </ProfilePicContainer>
            <TitleContainer id="title">
                {/*<LargeTitleImage src={LargeTitleWhite} />*/}
                <LargeTitleText>
                    <LinePrinter
                        id={"title"}
                        line={{segments: [{text: "Gerik Peterson"}]}}
                        lineIndex={0}
                        typingSpeed={125}
                        instantPrint={false}
                        isLastLine={false}
                    />
                </LargeTitleText>
            </TitleContainer>
        </TitleBlockContainer>
    )
}

export default TitleBlock;
