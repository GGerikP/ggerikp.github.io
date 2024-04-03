import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Cursor, { CursorDisplay } from './Cursor';

const SegmentWrapper = styled.span`
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
`;

const PrintedTextSpan = styled.span`
`;

export type Segment = {
    text: string;
    link?: string;
    prePrintDelay?: number;
    postPrintDelay?: number;
}

type SegmentPrinterProps = {
    id?: string;
    segment: Segment;
    segmentIndex: number;
    isLastSegment: boolean;
    isLastLine: boolean;
    finalCursorDisplay?: CursorDisplay;
    typingSpeed: number;
    instantPrint: boolean;
    printNextSegment: () => void;
};

function SegmentPrinter({
    id,
    segment,
    segmentIndex,
    isLastSegment,
    isLastLine,
    finalCursorDisplay,
    typingSpeed,
    instantPrint,
    printNextSegment
    }: SegmentPrinterProps) {

  const [isDonePrinting, setIsDonePrinting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [cursorDisplay, setCursorDisplay] = useState<CursorDisplay>(CursorDisplay.Blink);
  const postPrintDelay = (!instantPrint && (segment.postPrintDelay) ? segment.postPrintDelay : 0);
  const prePrintDelay = !instantPrint ? (typingSpeed + ((charIndex === 0 && segment.prePrintDelay) ? segment.prePrintDelay : 0)) : 0;

    // Cursor Display
    useEffect(() => {
        if (!isDonePrinting) {
            if (charIndex < segment?.text?.length) {
                // Still printing the segment - show a stable cursor
                setCursorDisplay(CursorDisplay.Stable);
            } else {
                setCursorDisplay(CursorDisplay.Blink);
            }
        } else if (isDonePrinting) {
            if (isLastSegment && isLastLine && finalCursorDisplay) {
                setCursorDisplay(finalCursorDisplay);
            } else if (isLastSegment && isLastLine) {
                setCursorDisplay(CursorDisplay.Blink);
            } else if (isLastSegment && !isLastLine) {
                setCursorDisplay(CursorDisplay.Hidden);
            } else if (!isLastSegment && !isLastLine) {
                setCursorDisplay(CursorDisplay.Hidden);
            } else {
                setCursorDisplay(CursorDisplay.Blink);
            }
        }
    }, [charIndex, isLastLine, isLastSegment, isDonePrinting, segment?.text?.length, cursorDisplay, finalCursorDisplay])

  // Get Next Segment
  useEffect(() => {
    if (isDonePrinting) {
      printNextSegment();
    }
  }, [isDonePrinting, printNextSegment]);

  // Set whether we're done printing or not
  useEffect(() => {
    const postPrintTimeout = setTimeout(() => {
      if (charIndex >= segment?.text?.length) {
        setIsDonePrinting(true);
      }
    }, postPrintDelay);
    return (() => clearTimeout(postPrintTimeout));
  }, [segment, charIndex, postPrintDelay]);

  // Update the Displayed Text
  useEffect(() => {
    setDisplayedText(segment.text.substring(0, charIndex));
  }, [charIndex, segment]);

  // Print the next char
  useEffect(() => {
    const prePrintTimeout = setTimeout(() => {
      if (charIndex < segment?.text?.length) {
        setCharIndex(prevCharIndex => prevCharIndex + 1);
      }
    }, prePrintDelay);
    return (() => clearTimeout(prePrintTimeout));
  }, [segment, charIndex, prePrintDelay]);

    const cursorID = (id ? id + '-' : '') + segmentIndex;
    return (
        <SegmentWrapper id={`${id ? id + '-' : ''}${segmentIndex}`}>
            {segment.link
                ? <StyledLink
                    url={segment.link}>
                    <PrintedTextSpan>{displayedText}</PrintedTextSpan>
                </StyledLink>
                : <PrintedTextSpan>{displayedText}</PrintedTextSpan>
            }
            <Cursor
                id={cursorID}
                key={cursorID}
                cursorDisplay={cursorDisplay}
                index={segmentIndex} />
        </SegmentWrapper>
    );
}

export default SegmentPrinter;
