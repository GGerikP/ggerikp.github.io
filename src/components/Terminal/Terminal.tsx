import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';
import { Line } from '../Printer/LinePrinter';
import Tab from './Tab';

const TerminalContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 5px;
    color: white;
    background-color: black;
    width: 100%;
    overflow: visible;
    font-size: ${theme.fontSizes.large};
    span, p {
        font-family: monospace;
        font-size: ${theme.fontSizes.large};
        line-height: 1.4285em;
    }
`;

const TerminalTitleBar = styled.div`
    border-radius: 5px 5px 0px 0px;
    background-color: #444444;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 25px;
`;

const TerminalTitle = styled.p`
    text-align: center;
    display: block;
    width: 100%;
    margin: 0;
`;

const TerminalCloseButtonIcon = styled.i`
    color: white;
    font-size: 20px;
    padding: 3px;
    display: none;
`;

const tabContainerHeight = '30vh';
const tabContainerHeightExpansionDuration = 5;
const tabContainerKeyframes = keyframes`
  0% { height: 0px; }
  100% { height: ${tabContainerHeight}; }
`;

type TabsContainerProps = {
    $expanded: boolean;
}
const TabsContainer = styled.div<TabsContainerProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: black;
    animation: ${tabContainerKeyframes} ${tabContainerHeightExpansionDuration}s;
    ${props => props.$expanded ?
    {
      height: 'auto',
      minHeight: tabContainerHeight,
      overflow: 'visible'
    }
    : {
      height: '0px',
      overflow: 'hidden'
    }
}
`;
// eslint-disable-next-line no-shadow
export enum PrintingState {
    // eslint-disable-next-line no-unused-vars
    NOT_STARTED = 'not_started',
    // eslint-disable-next-line no-unused-vars
    PRINTING = 'printing',
    // eslint-disable-next-line no-unused-vars
    DONE = 'done'
}
type TerminalProps = {
    id?: string;
    lines?: Line[];
    instantPrint?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ id, lines, instantPrint }: TerminalProps) => {
  const windowTitle = 'gerik@peterson:~';

  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    // Wait for the initial animation to complete, then expand further if needed
    const timer = setTimeout(() => {
      setExpanded(true);
    }, tabContainerHeightExpansionDuration * 975); // Match this duration with the animation duration

    return () => clearTimeout(timer);
  }, []);

  const promptChars = '$ ';
  return (
    <TerminalContainer>
      <TerminalTitleBar>
        <TerminalTitle>{windowTitle}</TerminalTitle>
        <TerminalCloseButtonIcon className="fa fa-times" />
      </TerminalTitleBar>
      <TabsContainer $expanded={expanded}>
        <Tab
          id={id}
          lines={lines}
          promptChars={promptChars}
          instantPrint={instantPrint}
        />
      </TabsContainer>
    </TerminalContainer>
  );
};

export default Terminal;