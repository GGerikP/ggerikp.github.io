import React from 'react';
import styled from 'styled-components';
import Terminal from '../../components/Terminal/Terminal';
import theme from '../../theme';
import { Line } from '../../components/Printer/LinePrinter';

const AboutMeSection = styled.section`
    display: flex;
    justify-content: center;
    padding-right: 3%;
    @media (width > ${theme.breakpoints.mobile}) {
        padding-left: 5%;
        padding-right: 5%;
    }
    margin-bottom: 10px;
    z-index: 1;
`;

const AboutMeText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
    justify-content: center;
`;

const AboutMeParagraph = styled.div`
    text-align: center;
`;

const aboutMeText: Line[] = [
  { segments: [{ text: 'Hey there!  Welcome to Gerik Peterson\'s website.', postPrintDelay: 750 }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
  { segments: [{ text: 'You are now speaking with his personal AI assistant.', postPrintDelay: 500 }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
  { segments: [{ text: 'Please note, I am very new so I am still developing my capabilities; but I will do what I can to help!', postPrintDelay: 250 }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
  { segments: [{ text: 'What can I help you with today?', postPrintDelay: 250 }] },
];

function AboutMeBlock () {
  return (
    <AboutMeSection id="about">
      <AboutMeText>
        <AboutMeParagraph style={{ textAlign: 'center' }}>
          <Terminal lines={aboutMeText} instantPrint={false} id='about' />
        </AboutMeParagraph>
      </AboutMeText>
    </AboutMeSection>
  );
}

export default AboutMeBlock;
