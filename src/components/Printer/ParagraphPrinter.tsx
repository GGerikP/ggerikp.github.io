import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import LinePrinter, { Line } from './LinePrinter';

const PrintedTextBlockContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
`

type ParagraphPrinterProps = {
    lines?: Line[];
    startingLineIndex?: number;
    typingSpeed: number;
    promptChars?: string;
    instantPrint: boolean;
};

function ParagraphPrinter({ lines, typingSpeed, promptChars, instantPrint }: ParagraphPrinterProps) {

    // const sideEffectExecutedRef = useRef(false);
    const [lineIndex, setLineIndex] = useState<number>(0);
    const [displayedLines, setDisplayedLines] = useState<Line[]>([]);

    const printNextLine = useCallback(() => {
        setLineIndex(prevLineIndex => prevLineIndex + 1);
    }, [])

    useEffect(() => {
        // console.log(`ParagraphPrinter: lineIndex(${lineIndex}), lines.length(${lines?.length}), displayedLines.length(${displayedLines.length})`);
        if (lines) {
            if (lineIndex < lines.length) {
                if (displayedLines[lineIndex] === undefined) {
                    // console.log(`ParagraphPrinter: lineIndex(${lineIndex}) JSON.stringify(lines[lineIndex])(${JSON.stringify(lines[lineIndex])})`)
                    if (!lines[lineIndex]) {
                        console.log(`Cannot add undefined line element at lines[${lineIndex}]`);
                    } else {
                        setDisplayedLines(prevDisplayedLines => {
                            const updatedDisplayedLines = [...prevDisplayedLines];
                            updatedDisplayedLines[lineIndex] = lines[lineIndex]
                            return updatedDisplayedLines;
                        });
                    }
                } else {
                    // console.log(`Not updating the displayedLines: displayedLines[${lineIndex}] is not undefined.`);
                }
            } else {
                // console.log(`Not updating the displayedLines: lineIndex is greater than or equal to the lines.length.`);
            }
        } else {
            console.log(`Not updating the displayedLines: there are no lines.`);
        }
    }, [lineIndex, lines, displayedLines]);

    // console.log(`lineIndex = ${lineIndex}`);
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
                        isLastLine={(!lines || index === lines.length - 1)}
                        printNextLine={printNextLine}
                    />
                )
            })}
        </PrintedTextBlockContainer>
    );
}

export default ParagraphPrinter;