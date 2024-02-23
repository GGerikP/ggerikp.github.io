import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Cursor, { CursorDisplay } from './Cursor';

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

const PrintedTextSpan = styled.span`
    white-space: pre;
    text-wrap: wrap;
`

export type Segment = {
    text: string;
    link?: string;
    printDelayBefore?: number;
    printDelayAfter?: number;
}

type SegmentPrinterProps = {
    segment: Segment;
    segmentIndex: number;
    typingSpeed: number;
    instantPrint: boolean;
    hasMoreLines: boolean;
    printNextSegment: () => void;
};

function SegmentPrinter({ segment, segmentIndex, typingSpeed, instantPrint, hasMoreLines, printNextSegment }: SegmentPrinterProps) {

    const [isDonePrinting, setIsDonePrinting] = useState<boolean>(false);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [displayedText, setDisplayedText] = useState<string>('');
    const [cursorDisplay, setCursorDisplay] = useState<CursorDisplay>(CursorDisplay.Blink);

    useEffect(() => {
        const prePrintDelay = !instantPrint ? (typingSpeed + ((charIndex === 0 && segment.printDelayBefore) ? segment.printDelayBefore : 0)) : 0;

        const updateDisplayedText = () => {
            if (segment?.text?.length > charIndex) {
                setCursorDisplay(CursorDisplay.Stable);
                setDisplayedText(segment.text.substring(0, charIndex + 1));
                setCharIndex(prevState => prevState + 1);
            } else {
                setCursorDisplay(CursorDisplay.Blink);
                setIsDonePrinting(true);
            }
        };

        const postPrintDelay = isDonePrinting ? (!instantPrint && (segment.printDelayAfter) ? segment.printDelayAfter : 0) : 0;
        const postPrintTimeout = setTimeout(() => {
            if (isDonePrinting) {
                if (hasMoreLines) {
                    setCursorDisplay(CursorDisplay.Hidden);
                }
                printNextSegment();
            } else {
                const prePrintTimeout = setTimeout(() => {
                    setCursorDisplay(CursorDisplay.Blink);
                    updateDisplayedText();
                }, prePrintDelay);
                return () => clearTimeout(prePrintTimeout);
            }
        }, postPrintDelay);
        return () => clearTimeout(postPrintTimeout);
        // We want to ignore the printNextSegment dependency
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [segment, charIndex, isDonePrinting, hasMoreLines, instantPrint, typingSpeed]);

    return (
        <span id={`SegmentPrinter:${segmentIndex}`}>
            {segment.link
                ? <StyledLink
                    url={segment.link}>
                    <PrintedTextSpan>{displayedText}</PrintedTextSpan>
                </StyledLink>
                : <PrintedTextSpan>{displayedText}</PrintedTextSpan>
            }
            <Cursor cursorDisplay={cursorDisplay} />
        </span>
    );
}

export default SegmentPrinter;