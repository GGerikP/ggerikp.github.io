import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TerminalHomePageMain from './TerminalHomePageMain';
import theme from '../../theme';
import { Line } from '../../components/IntegratedParagraphPrinter';
import GenericPageWrapper from '../../components/GenericPageWrapper';

// Styled component for TerminalHomePage
const TerminalHomePageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  min-width: ${theme.breakpoints.min};
`;

const lines: Line[] = [
  { segments: [{ text: "Loading: Gerik Peterson's Playground...", printDelayBefore: 1000, postPrintDelay: 1000 }] },
  { segments: [{ text: "" }] },
  { segments: [{ text: "Welcome Visitor!", postPrintDelay: 500 }] },
  { segments: [{ text: "" }] },
  { segments: [{ text: "This website is used as a place for me to play with new tech and tools.", postPrintDelay: 500 }]},
  { segments: [{ text: "" }] },
  { segments: [{ text: "Feel free to have a look around. ", postPrintDelay: 250 }, { text: "The following are a few topics about me: "}] },
  { segments: [{ text: "" }] },
  { segments: [{ text: "  "}, { text: "Software Engineer", link: "/engineering" }] },
  { segments: [{ text: "  "}, { text: "Manager", link: "/management" }] },
  {
    segments: [
      { text: "  "},
      { text: "Musician: " },
      { text: "Singer", link: "/singer", printDelayBefore: 1000, postPrintDelay: 250 }, { text: " - "},
      { text: "Pianist", link: "/pianist", postPrintDelay: 1000 }
    ],
  },
  { segments: [{ text: "  "}, { text: "Californian", link: "/political-whatifs" }] },
  { segments: [{ text: "  "}, { text: "Londoner", link: "/traveler" }] },
  { segments: [{ text: "" }] },
  { segments: [{ text: "" }] },
];

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  font-size: 10vw;
  font-weight: bolder;
  transform: scaleY(1.5);
  color: rgb(0,0,0,5%);
  display: flex;
  justify-content: center; /* Horizontally center the text */
  align-items: center; /* Vertically center the text */
  letter-spacing: 1%;
`;

type TerminalHomePageProps = {};

function TerminalHomePage(props: TerminalHomePageProps) {

  const [terminalText, setTerminalText] = useState<Line[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('https://api.example.com/data');
        //const json = await response.json();
        setTerminalText(lines);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setTerminalText]);

  return (
    <GenericPageWrapper>
      <TerminalHomePageContainer>
        <TitleContainer>Gerik Peterson</TitleContainer>
        <TerminalHomePageMain terminalText={terminalText} />
      </TerminalHomePageContainer>
    </GenericPageWrapper>
  );
}

export default TerminalHomePage;
