import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SegmentPrinter, { Segment } from './SegmentPrinter';

const PrintedLine = styled.div`
    width: 100%;
`;

export type Line = {
    segments: Segment[];
}

type LinePrinterProps = {
    line: Line;
    lineIndex: number;
    typingSpeed: number;
    promptChars?: string;
    instantPrint: boolean;
    isLastLine: boolean;
    printNextLine?: () => void;
};

function LinePrinter({ line, lineIndex, typingSpeed, promptChars, instantPrint, isLastLine, printNextLine }: LinePrinterProps) {

    const [lineIsDone, setLineIsDone] = useState<boolean>(false);
    const [segmentIndex, setSegmentIndex] = useState<number>(0);
    const [printedSegments, setPrintedSegments] = useState<Segment[]>([]);

    // Called by the TextPrinter to print each next segment
    const printNextSegment = useCallback(() => {
        // console.log('Calling printNextSegment ----------');
        setSegmentIndex(prevSegmentIndex => prevSegmentIndex + 1);
    }, []);

    // Update whether the line is done or not.
    useEffect(() => {
        if (!line) {
            // console.log('LinePrinter WARNING: CANNOT PRINT EMPTY LINE.');
        } else if (!lineIsDone && segmentIndex === line.segments.length) {
            setLineIsDone(true);
        }
    }, [segmentIndex, line, lineIsDone]);

    // Print the next line
    useEffect(() => {
        // console.log(`LinePrinter: lineIndex(${lineIndex}) JSON.stringify(line)=${JSON.stringify(line)}`);
        // console.log(`LinePrinter: lineIndex(${lineIndex}) line.lineSegments.length(${line.lineSegments.length})`);
        if (!line) {
            console.log('LinePrinter WARNING: CANNOT PRINT EMPTY LINE.');
        } else if (lineIsDone) {
            if (typeof printNextLine === 'function') {
                // console.log(`LinePrinter: lineIndex(${lineIndex}) segmentIndex(${segmentIndex})`);
                printNextLine();
            }
        }
    }, [lineIsDone, lineIndex, line, printNextLine]);

    useEffect(() => {
        if (!line) {
            // console.log(`Line is undefined! ${JSON.stringify(line)}`);
        } else {
            // console.log(`LinePrinter: lineIsDone(${lineIsDone}), segmentIndex(${segmentIndex}), line.lineSegments.length(${line.segments.length})`)
            if (lineIsDone) {
                // console.log(`The line is done!`);
            } else if (!lineIsDone && (segmentIndex < line.segments.length)) {
                // console.log('Creating a new segment.');
                const nextSegment: Segment = {
                    text: line?.segments[segmentIndex]?.text,
                    link: line?.segments[segmentIndex]?.link,
                    prePrintDelay: line?.segments[segmentIndex]?.prePrintDelay,
                    postPrintDelay: line?.segments[segmentIndex]?.postPrintDelay,
                }
                if (printedSegments[segmentIndex] === undefined) {
                    // console.log('Adding a new segment.');
                    setPrintedSegments(prevDisplayedSegments => {
                        const updatedDisplayedSegments = [...prevDisplayedSegments];
                        updatedDisplayedSegments[segmentIndex] = nextSegment;
                        return updatedDisplayedSegments;
                    });
                } else {
                    // console.log('Segment is not null - NOT ADDING THE SEGMENT.')
                }
            }
        }

    }, [segmentIndex, lineIsDone, line?.segments, printedSegments, line])

    return (
        <PrintedLine id={`LinePrinter:${lineIndex}`}>
            {promptChars}
            {printedSegments.map((segment, index) => {
                return (
                    <SegmentPrinter
                        key={index}
                        segment={segment}
                        segmentIndex={index}
                        isLastSegment={index === line.segments.length - 1}
                        typingSpeed={typingSpeed}
                        instantPrint={instantPrint}
                        isLastLine={isLastLine}
                        printNextSegment={printNextSegment}
                    />
                )
            })}
        </PrintedLine>
    );
}

export default LinePrinter;