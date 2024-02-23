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
  { lineSegments: [{ text: "Loading: Gerik Peterson's Playground...", printDelayBefore: 1000, printDelayAfter: 1000 }] },
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "Welcome Visitor!", printDelayAfter: 500 }] },
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "This website is used as a place for me to play with new tech and tools.", printDelayAfter: 500 }]},
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "Feel free to have a look around. ", printDelayAfter: 250 }, { text: "The following are a few topics about me: "}] },
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "  "}, { text: "Software Engineer", link: "/engineering" }] },
  { lineSegments: [{ text: "  "}, { text: "Manager", link: "/management" }] },
  {
    lineSegments: [
      { text: "  "},
      { text: "Musician: " },
      { text: "Singer", link: "/singer", printDelayBefore: 1000, printDelayAfter: 250 }, { text: " - "},
      { text: "Pianist", link: "/pianist", printDelayAfter: 1000 }
    ],
  },
  { lineSegments: [{ text: "  "}, { text: "Californian", link: "/political-whatifs" }] },
  { lineSegments: [{ text: "  "}, { text: "Londoner", link: "/traveler" }] },
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "" }] },
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
