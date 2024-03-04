import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SegmentPrinter from './SegmentPrinter';

const PrintedLine = styled.div`
`;

interface LineSegment {
    text: string;
    link?: string;
    printDelayBefore?: number;
    printDelayAfter?: number;
}

export type Line = {
    lineSegments: LineSegment[];
}

type LinePrinterProps = {
    line: Line;
    lineIndex: number;
    typingSpeed: number;
    promptChars?: string;
    instantPrint: boolean;
    hasMoreLines: boolean;
    printNextLine?: () => void;
};

function LinePrinter({ line, lineIndex, typingSpeed, promptChars, instantPrint, hasMoreLines, printNextLine }: LinePrinterProps) {

    const sideEffectExecutedRef = useRef(false);
    const [segmentIndex, setSegmentIndex] = useState<number>(-1);
    const [displayedSegments, setDisplayedSegments] = useState<LineSegment[]>([]);

    // Called by the TextPrinter to print each next segment
    const printNextSegment = useCallback(() => {
        const updatedSegmentIndex = segmentIndex + 1;
        setSegmentIndex(updatedSegmentIndex);
        if (updatedSegmentIndex < line.lineSegments.length) {
            const nextSegment: LineSegment = {
                text: line?.lineSegments[updatedSegmentIndex]?.text,
                link: line?.lineSegments[updatedSegmentIndex]?.link,
                printDelayBefore: line?.lineSegments[updatedSegmentIndex]?.printDelayBefore,
                printDelayAfter: line?.lineSegments[updatedSegmentIndex]?.printDelayAfter,
            }
            const updatedDisplayedSegments = [...displayedSegments, nextSegment]
            setDisplayedSegments(updatedDisplayedSegments);
        } else {
            if (typeof printNextLine === 'function') {
                printNextLine();
            }
        }
    }, [segmentIndex, displayedSegments, line.lineSegments, printNextLine]);

    // Used to print the first segment
    useEffect(() => {
        if (!sideEffectExecutedRef.current) {
            printNextSegment();
        }
        sideEffectExecutedRef.current = true;
    }, [printNextSegment]);

    return (
        <PrintedLine id={`LinePrinter:${lineIndex}`}>
            {promptChars}
            {displayedSegments.map((segment, index) => {
                return (
                    <SegmentPrinter
                        key={index}
                        segment={segment}
                        segmentIndex={index}
                        typingSpeed={typingSpeed}
                        instantPrint={instantPrint}
                        hasMoreLines={hasMoreLines}
                        printNextSegment={printNextSegment}
                    />
                )
            })}
        </PrintedLine>
    );
}

export default LinePrinter;