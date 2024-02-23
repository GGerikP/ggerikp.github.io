import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LinePrinter from './LinePrinter';

const PrintedTextBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

export type LineSegment = {
    text: string;
    link?: string;
    printDelayBefore?: number;
    printDelayAfter?: number;
}

export type Line = {
    lineSegments: LineSegment[];
}

type ParagraphPrinterProps = {
    lines?: Line[];
    startingLineIndex?: number;
    typingSpeed: number;
    promptChars?: string;
    instantPrint: boolean;
};

function ParagraphPrinter({ lines, typingSpeed, promptChars, instantPrint }: ParagraphPrinterProps) {

    const sideEffectExecutedRef = useRef(false);
    const [lineIndex, setLineIndex] = useState<number>(0);
    const [displayedLines, setDisplayedLines] = useState<Line[]>([]);
    const [hasMoreLines, setHasMoreLines] = useState<boolean>(true);

    const printNextLine = useCallback(() => {
        if (displayedLines && lines && (lineIndex < lines.length)) {
            const newLine: Line = lines[lineIndex];
            const updatedDisplayedLines: Line[] = [...displayedLines, newLine];
            setDisplayedLines(updatedDisplayedLines);
        }
        setLineIndex(prevState => {
            const nextLineIndex = prevState + 1;
            if (!lines || nextLineIndex === lines.length) {
                setHasMoreLines(false);
            }
            return nextLineIndex;
        });
    }, [lineIndex, displayedLines, lines]);

    useEffect(() => {
        if (!sideEffectExecutedRef.current) {
            printNextLine();
        }
        sideEffectExecutedRef.current = true;
    }, [printNextLine]);

    return (
        <PrintedTextBlockContainer id="ParagraphPrinter">
            {displayedLines && displayedLines.map((line, index) => {
                return (
                    <LinePrinter
                        key={index}
                        line={line}
                        lineIndex={index}
                        promptChars={promptChars}
                        typingSpeed={typingSpeed}
                        instantPrint={instantPrint}
                        hasMoreLines={hasMoreLines}
                        printNextLine={printNextLine}
                    />
                )
            })}
        </PrintedTextBlockContainer>
    );
}

export default ParagraphPrinter;