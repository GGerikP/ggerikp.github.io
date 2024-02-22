import React from 'react';
import styled, { keyframes } from 'styled-components';
import profilepic from './images/ProfilePic-v4.png';
import { Line } from '../../components/IntegratedParagraphPrinter';
import Terminal from '../../components/Terminal';

// Styled component for TerminalHomePage header
const Main = styled.main`
  top: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const ProfilePicKeyframes = keyframes`
  from { left: -400px; }
  to { left: 0px; }
`

const ProfilePic = styled.img`
  position: absolute;
  top: 5vw;
  left: 0px;
  width: 400px;
  animation: ${ProfilePicKeyframes} 1s;
`

const MainContent = styled.div`
  position: absolute;
  min-width: 75%;
  height: 100%;
  right: 0px;
  z-index: 0;
  @media (min-width: 800px) {
    width: calc(100vw - 400px);
    right: 20px;
  }
`

const TitleContainer = styled.div`
  height: 400px;
  @media (min-width: 1200px) {
    height: 25%;
  }
`

type TerminalHomePageMainProps = {
  terminalText: Line[];
}

const TerminalHomePageMain: React.FC<TerminalHomePageMainProps> = ({terminalText}) => {
  return (
      <Main>
          <ProfilePic src={profilepic}/>
          <MainContent>
            <TitleContainer></TitleContainer>
            <Terminal lines={terminalText} />
          </MainContent>
      </Main>
  )
}

export default TerminalHomePageMain;