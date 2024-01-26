import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HomePageHeader from '../TerminalHomePage/TerminalHomePageHeader';
import theme from '../../theme';
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

type NewsFilterPageProps = {};

function NewsFilterPage(props: NewsFilterPageProps) {

  //const [terminalText, setTerminalText] = useState<Line[]>([{lineSegments: [ {text: ''}]}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('https://api.example.com/data');
        //const json = await response.json();
        //setTerminalText(lines);
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
      </HomePageContainer>
    </GenericPageWrapper>
  );
}

export default NewsFilterPage;
