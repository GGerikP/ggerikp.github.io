import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ProportionalScrollElement from '../../components/ProportionalScrollElement';
import ProfilePicChicagoTransp from './images/profile-gerikpeterson-large.webp';
import ProfilePicChicago from './images/profile-gerikpeterson-large-transp.webp';
import LinePrinter from '../../components/Printer/LinePrinter';

const TitleBlockContainer = styled.section`
    width: 100%;
    height: 85vh;
    position: relative;
    display: flex;
    flex-direction: row;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

const ProfilePicContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
`;

const ProfilePicFullPage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${ProfilePicChicagoTransp});
    @media (width > ${theme.breakpoints.tablet}) {
      background-image: url(${ProfilePicChicago});
    }
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
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: flex-end;
`;

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

function TitleBlock () {
  return (
    <TitleBlockContainer id="title">
      <ProfilePicContainer>
        <ProportionalScrollElement scrollPercentage={.25}>
          <ProfilePicFullPage />
        </ProportionalScrollElement>
      </ProfilePicContainer>
      <TitleContainer>
        {/*<LargeTitleImage src={LargeTitleWhite} />*/}
        <LargeTitleText>
          <LinePrinter
            id={'title'}
            line={{ segments: [{ text: 'Gerik Peterson' }] }}
            lineIndex={0}
            typingSpeed={125}
            instantPrint={false}
            isLastLine={false}
          />
        </LargeTitleText>
      </TitleContainer>
    </TitleBlockContainer>
  );
}

export default TitleBlock;
