import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomePageHeader from '../TerminalHomePage/TerminalHomePageHeader';
import HomePageMain from '../TerminalHomePage/TerminalHomePageMain';
import theme from '../../theme';
import { Line } from '../../components/LinePrinter';
import GenericPageWrapper from '../../components/GenericPageWrapper';

// Styled component for HomePage
const HomePageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  min-width: ${theme.breakpoints.min};
`;

const lines: Line[] = [
  { lineSegments: [{ text: "This is my Pianist page where I'll link some recordings of me playing the piano...", printDelayAfter: 1000 }] },
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "" }] },
  { lineSegments: [{ text: "" }] },
];

type PianistPageProps = {};

function PianistPage(props: PianistPageProps) {

  const [terminalText, setTerminalText] = useState<Line[]>([{lineSegments: [ {text: ''}]}]);

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
  }, []);

  return (
    <GenericPageWrapper>
      <HomePageContainer>
        <HomePageHeader />
        <HomePageMain terminalText={terminalText} />
      </HomePageContainer>
    </GenericPageWrapper>
  );
}

export default PianistPage;