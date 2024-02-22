import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Link from './Link';

const PrintedTextBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const PrintedLine = styled.div`
    display: inline-block;
`;

interface CursorProps {
    $istyping: number;
    $isidle: number;
}

const Cursor = styled.div<CursorProps>`
    padding-right: 3px;
    display: inline-block;
    border-right: none;
    ${props => props.$istyping === 1 && css`
        border-right: 2px solid white;
    `}
    ${props => props.$isidle === 1 && css`
        border-right: 2px solid white;
        animation: ${blink} .5s step-end infinite;
    `}
`

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

const PrintedTextSpan = styled.span`
    white-space: pre;
    text-wrap: wrap;
`

export type LineSegment = {
    text: string;
    link?: string;
    printDelayBefore?: number;
    printDelayAfter?: number;
}

enum CursorDisplay {
    Stable = "stable",
    Blink = "blink",
    Hidden = "hidden"
}

export type Line = {
    lineSegments: LineSegment[];
}

type ParagraphPrinterProps = {
    lines: Line[];
    typingSpeed: number;
    promptChars?: string;
    instantPrint: boolean;
};

type CursorSegment = {
    text: string;
    link?: string;
    printDelayAfter?: number;
    className?: string;
    style?: string;
}
type CursorLine = {
    segments: CursorSegment[];
}
type DisplayedText = {
    lines: CursorLine[];
    cursorDisplay: CursorDisplay;
}
type CursorCoordinates = {
    activeLine: number,
    activeSegment: number,
    charIndex: number
}
const IntegratedParagraphPrinter: React.FC<ParagraphPrinterProps> = ({ lines, typingSpeed, promptChars, instantPrint }) => {

    const [cursorCoordinates, setCursorCoordinates] = useState<CursorCoordinates>({ charIndex: 0, activeSegment: 0, activeLine: 0 })
    const [displayedText, setDisplayedText] = useState<DisplayedText>({
        lines: [{
            segments: [{ text: '' }]
        }],
        cursorDisplay: CursorDisplay.Blink
    });

    useEffect(() => {
        const updateStateLines = (prevState: DisplayedText, newState: DisplayedText, lineIndex: number) => {
            if (!prevState.lines[lineIndex] || lineIndex >= prevState.lines.length) {
                const newLine = new Array(lineIndex - prevState.lines.length + 1).fill(null).map(() => ({ segments: [{ text: '' }] }));
                newState.lines = [...prevState.lines, ...newLine];
            } else {
                newState.lines = [...prevState.lines];
            }
        }

        const updateStateSegments = (newState: DisplayedText, lineIndex: number, segmentIndex: number) => {
            if (segmentIndex >= newState.lines[lineIndex].segments.length) {
                const newSegment = new Array(segmentIndex - newState.lines[lineIndex].segments.length + 1).fill(null).map(() => ({ text: '' }));
                newState.lines[lineIndex].segments = [...newState.lines[lineIndex].segments, ...newSegment];
            }
        }

        const updateStateText = (newState: DisplayedText, lineIndex: number, segmentIndex: number, newText: string, link?: string) => {
            newState.lines[lineIndex].segments[segmentIndex] = { text: newText };
            if (link) {
                newState.lines[lineIndex].segments[segmentIndex].link = link;
            }
        }

        const updateDisplayedText = (lineIndex: number, segmentIndex: number, newText: string, link?: string) => {
            setDisplayedText(prevState => {
                let newState = { ...prevState };
                updateStateLines(prevState, newState, lineIndex);
                updateStateSegments(newState, lineIndex, segmentIndex);
                updateStateText(newState, lineIndex, segmentIndex, newText, link);
                return newState;
            });
        };

        const currentSegment = lines[cursorCoordinates.activeLine].lineSegments[cursorCoordinates.activeSegment];
        const segmentText = currentSegment.text;
        const textSubSection = currentSegment.text.substring(0, cursorCoordinates.charIndex + 1);
        const isSegmentDone = (segmentText === textSubSection);
        const areSegmentsDone = (isSegmentDone && (cursorCoordinates.activeSegment === lines[cursorCoordinates.activeLine].lineSegments.length - 1));
        const areLinesDone = (areSegmentsDone && (cursorCoordinates.activeLine === lines.length - 1));

        const prePrintDelay = !instantPrint ? (typingSpeed + ((cursorCoordinates.charIndex === 0 && currentSegment.printDelayBefore) ? currentSegment.printDelayBefore : 0)) : 0;
        const postPrintDelay = !instantPrint && (isSegmentDone && currentSegment.printDelayAfter) ? currentSegment.printDelayAfter : 0;

        const timeout = setTimeout(() => {

            updateDisplayedText(cursorCoordinates.activeLine, cursorCoordinates.activeSegment, textSubSection, currentSegment?.link);

            if (areLinesDone) {
                setDisplayedText(prev => {
                    return {
                        ...prev,
                        cursorDisplay: CursorDisplay.Blink
                    }
                });
            } else {
                setTimeout(() => {
                    setCursorCoordinates(() => {
                        return {
                            activeLine: areSegmentsDone ? cursorCoordinates.activeLine + 1 : cursorCoordinates.activeLine,
                            activeSegment: isSegmentDone ? (areSegmentsDone ? 0 : cursorCoordinates.activeSegment + 1) : cursorCoordinates.activeSegment,
                            charIndex: !isSegmentDone ? cursorCoordinates.charIndex + 1 : 0
                        }
                    });
                }, postPrintDelay);
            }
        }, prePrintDelay);

        return () => clearTimeout(timeout);
    }, [lines, typingSpeed, cursorCoordinates, instantPrint]);

    return (
        <PrintedTextBlockContainer>
            {displayedText.lines.map((line, lineIndex) => {
                return (
                    <PrintedLine key={lineIndex}
                    >
                        <div>{promptChars}
                            {line.segments.map((segment, segmentIndex) => {
                                const text = displayedText?.lines[lineIndex]?.segments[segmentIndex].text;
                                return (
                                    segment.link
                                        ? <StyledLink
                                            key={segmentIndex}
                                            url={segment.link}>
                                            <PrintedTextSpan>{text}</PrintedTextSpan>
                                        </StyledLink>
                                        : <PrintedTextSpan key={segmentIndex}>{text}</PrintedTextSpan>
                                )
                            })}
                        <Cursor
                            $istyping={lineIndex === displayedText.lines.length - 1 && (displayedText?.cursorDisplay) === CursorDisplay.Stable ? 1 : 0}
                            $isidle={lineIndex === displayedText.lines.length - 1 && (displayedText?.cursorDisplay) === CursorDisplay.Blink ? 1 : 0}>
                                &nbsp;</Cursor>
                        </div>
                    </PrintedLine>
                )
            })}
        </PrintedTextBlockContainer>
    );
}

export default IntegratedParagraphPrinter;