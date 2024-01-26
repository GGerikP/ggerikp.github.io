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
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fontSizes.large};
    animation: ${terminalKeyframes} ${terminalHeightExpansionDuration}s;
    height: 0px;
    overflow: hidden;
`

const WindowTitleBar = styled.div`
    border-radius: 5px 5px 0px 0px;
    background-color: ${theme.colors.primaryAccent};
`

const WindowTitle = styled.div`
    text-align: center;
    display: block;
    width: 100%;
`

const WindowX = styled.div`
    position: absolute;
    right: 5px;
    top: 0px;
    height: 100%;
`

const TerminalContainer = styled.div`
    color: ${theme.colors.text};
    top: 5%;
    left: 5%;
    background-color: ${theme.colors.secondary};
    border-radius: 0px 0px 5px 5px;
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

type TerminalProps = {
    lines: Line[];
}

const Terminal: React.FC<TerminalProps> = ({ lines }) => {
    const windowTitle = 'gerik@peterson:~';

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
      // Wait for the initial animation to complete, then expand further if needed
      const timer = setTimeout(() => {
        setExpanded(true);
      }, terminalHeightExpansionDuration * 975); // Match this duration with the animation duration
  
      return () => clearTimeout(timer);
    }, []);

    return (
        <WindowContainer style={expanded ? { height:'auto' , minHeight : terminalHeight, overflow: 'visible' } : undefined}>
            <WindowTitleBar>
                <WindowTitle>{windowTitle}</WindowTitle>
                <WindowX>x</WindowX>
            </WindowTitleBar>
            <TerminalContainer>
                <TerminatorTitleBar>
                    <TerminalIcon src={terminatorPrefsIcon} />
                    <WindowTitle>{windowTitle}</WindowTitle>
                </TerminatorTitleBar>
                <LinePrinter lines={lines} typingSpeed={35} promptChars={'$ '} instantPrint={false}/>
            </TerminalContainer>
        </WindowContainer>
    )
}

export default Terminal;