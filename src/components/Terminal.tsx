import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';
import LinePrinter, { Line } from './LinePrinter';
import terminatorPrefsIcon from './images/terminator-prefs-icon.jpeg';

const terminalHeight: string = '50vh'
const terminalHeightExpansionDuration: number = 5;
const terminalKeyframes = keyframes`
  0% { height: 0px; }
  100% { height: ${terminalHeight}; }
`

const WindowContainer = styled.div`
    display: block;
    border-radius: 5px;
    color: white;
    font-size: ${theme.fontSizes.large};
    animation: ${terminalKeyframes} ${terminalHeightExpansionDuration}s;
    height: 0px;
    overflow: hidden;
`

const WindowTitleBar = styled.div`
    border-radius: 5px 5px 0px 0px;
    background-color: ${theme.colors.primaryAccent};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const WindowTitle = styled.div`
    text-align: center;
    display: block;
    width: 100%;
`

const WindowX = styled.i`
    color: white;
    font-size: 20px;
    padding: 3px;
`

const TerminalContainer = styled.div`
    color: white;
    top: 5%;
    left: 5%;
    background-color: black;
    border-radius: 0px 0px 10px 10px;
    height: 100%;
    min-height: inherit;
`

const TerminatorTitleBar = styled.div`
    background-color: red;
    text-align: center;
    width: 100%;
    display: block;
    position: relative;
`

const TerminalIcon = styled.img`
    position: absolute;
    left: 6px;
    top: 6px;
`

const LinesContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 5px;
`

type TerminalProps = {
    lines: Line[];
}

const Terminal: React.FC<TerminalProps> = ({ lines }) => {
    const windowTitle = 'gerik@peterson:~';

    const [expanded, setExpanded] = useState(false);
    const [printerKey, setPrinterKey] = useState(0);

    const handleClick = () => {
        setPrinterKey(prevKey => prevKey + 1);
      };

      useEffect(() => {
      // Wait for the initial animation to complete, then expand further if needed
      const timer = setTimeout(() => {
        setExpanded(true);
      }, terminalHeightExpansionDuration * 975); // Match this duration with the animation duration
  
      return () => clearTimeout(timer);
    }, []);

    const reprint = true;
    return (
        <WindowContainer style={expanded ? { height:'auto' , minHeight : terminalHeight, overflow: 'visible' } : undefined}>
            <WindowTitleBar>
                <WindowTitle>{windowTitle}</WindowTitle>
                <button onClick={handleClick}>Reprint</button>
                <WindowX className="fa fa-times" />
            </WindowTitleBar>
            <TerminalContainer>
                <TerminatorTitleBar>
                    <TerminalIcon src={terminatorPrefsIcon} />
                    <WindowTitle>{windowTitle}</WindowTitle>
                </TerminatorTitleBar>
                <LinesContainer>
                    <LinePrinter lines={lines} typingSpeed={35} promptChars={'$ '} instantPrint={false} key={printerKey}/>
                </LinesContainer>
            </TerminalContainer>
        </WindowContainer>
    )
}

export default Terminal;