import React from 'react';
import styled from 'styled-components';
import Terminal from '../../components/Terminal/Terminal';
import theme from '../../theme';
import { Line } from '../../components/Printer/LinePrinter';

const AIAssistantSection = styled.section`
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

const AIAssistantText = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    width: 100%;
    justify-content: center;
`;

const AIAssistantParagraph = styled.div`
    text-align: center;
`;

const aboutMeText: Line[] = [
  { segments: [{ text: 'Hey there!  Welcome to Gerik Peterson\'s website.', postPrintDelay: 500 }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
  { segments: [{ text: 'You are now speaking with his personal AI assistant.', postPrintDelay: 500 }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
  { segments: [
    { text: 'I have been created to assist you in getting information about him.', postPrintDelay: 250 }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
  { segments: [{ text: 'What can I help you with today?' }] },
  { segments: [{ text: '', postPrintDelay: 0 }] },
];

function AIAssistant () {
  return (
    <AIAssistantSection id="ai-assistant">
      <AIAssistantText>
        <AIAssistantParagraph style={{ textAlign: 'center' }}>
          <Terminal lines={aboutMeText} instantPrint={false} id='about' />
        </AIAssistantParagraph>
      </AIAssistantText>
    </AIAssistantSection>
  );
}

export default AIAssistant;
