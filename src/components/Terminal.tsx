import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';
import terminatorPrefsIcon from './images/terminator-prefs-icon.jpeg';
import ParagraphPrinter from './Printer/ParagraphPrinter';
import { Line } from './Printer/LinePrinter';

const terminalHeight: string = '50vh'
const terminalHeightExpansionDuration: number = 5;
const terminalKeyframes = keyframes`
  0% { height: 0px; }
  100% { height: ${terminalHeight}; }
`

type WindowContainerProps = {
    $expanded: boolean;
}
const WindowContainer = styled.div<WindowContainerProps>`
    display: block;
    border-radius: 5px;
    color: white;
    font-size: ${theme.fontSizes.large};
    animation: ${terminalKeyframes} ${terminalHeightExpansionDuration}s;
    ${props => props.$expanded ?
        {
            height: 'auto',
            minHeight: terminalHeight,
            overflow: 'visible'
        }
        : {
            height: "0px",
            overflow: "hidden"
        }
    }
    span, p {
        font-family: monospace;
        font-size: ${theme.fontSizes.large};
        line-height: 1.4285em;
    }
`

const WindowTitleBar = styled.div`
    border-radius: 5px 5px 0px 0px;
    background-color: #444444;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const WindowTitle = styled.p`
    text-align: center;
    display: block;
    width: 100%;
    margin: 0;
`

const WindowX = styled.i`
    color: white;
    font-size: 20px;
    padding: 3px;
`

const TerminalContainer = styled.div`
    top: 5%;
    left: 5%;
    background-color: black;
    border-radius: 0px 0px 10px 10px;
    height: 100%;
    min-height: inherit;
    p, span {
        color: ${theme.colors.primary};
    }
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
const ReprintButton = styled.button`
    color: black;
    background-color: ${theme.colors.primaryAccent};
`

type TerminalProps = {
    lines?: Line[];
    instantPrint?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ lines, instantPrint }: TerminalProps) => {
    const windowTitle = 'gerik@peterson:~';

    const [expanded, setExpanded] = useState<boolean>(false);
    const [printerKey, setPrinterKey] = useState<number>(0);

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

    return (
        <WindowContainer $expanded={expanded}>
            <WindowTitleBar>
                <WindowTitle>{windowTitle}</WindowTitle>
                <ReprintButton onClick={handleClick}>Reprint</ReprintButton>
                <WindowX className="fa fa-times" />
            </WindowTitleBar>
            <TerminalContainer>
                <TerminatorTitleBar>
                    <TerminalIcon src={terminatorPrefsIcon} />
                    <WindowTitle>{windowTitle}</WindowTitle>
                </TerminatorTitleBar>
                <LinesContainer>
                    {
                        lines ? 
                        <ParagraphPrinter
                            key={printerKey}
                            lines={lines}
                            typingSpeed={35}
                            promptChars={'$ '}
                            instantPrint={instantPrint ?? false}/>
                        : <></>
                    }
                </LinesContainer>
            </TerminalContainer>
        </WindowContainer>
    )
}

export default Terminal;