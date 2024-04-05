import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import SegmentPrinter, { Segment } from './SegmentPrinter';
import { CursorDisplay } from './Cursor';

const PrintedLine = styled.div`
    width: 100%;
`;

export type Line = {
    segments: Segment[];
}

type LinePrinterProps = {
    id?: string;
    line: Line;
    lineIndex: number;
    typingSpeed: number;
    promptChars?: string;
    instantPrint: boolean;
    isLastLine: boolean;
    printNextLine?: () => void;
    finalCursorDisplay?: CursorDisplay;
};

function LinePrinter ({
  id,
  line,
  lineIndex,
  typingSpeed,
  promptChars,
  instantPrint,
  isLastLine,
  printNextLine,
  finalCursorDisplay
}: LinePrinterProps) {

  const [lineIsDone, setLineIsDone] = useState<boolean>(false);
  const [segmentIndex, setSegmentIndex] = useState<number>(0);
  const [printedSegments, setPrintedSegments] = useState<Segment[]>([]);

  // Called by the TextPrinter to print each next segment
  const printNextSegment = useCallback(() => {
    setSegmentIndex(prevSegmentIndex => prevSegmentIndex + 1);
  }, []);

  // Update whether the line is done or not.
  useEffect(() => {
    if (!line) {
      return;
    } else if (!lineIsDone && segmentIndex === line.segments.length) {
      setLineIsDone(true);
    }
  }, [segmentIndex, line, lineIsDone]);

  // Print the next line
  useEffect(() => {
    if (!line) {
      return;
    } else if (lineIsDone) {
      if (typeof printNextLine === 'function') {
        // console.log(`LinePrinter: lineIndex(${lineIndex}) segmentIndex(${segmentIndex})`);
        printNextLine();
      }
    }
  }, [lineIsDone, lineIndex, line, printNextLine]);

  useEffect(() => {
    if (!line) {
      return;
    } else {
      if (lineIsDone) {
        return;
      } else if (!lineIsDone && (segmentIndex < line.segments.length)) {
        const nextSegment: Segment = {
          text: line?.segments[segmentIndex]?.text,
          link: line?.segments[segmentIndex]?.link,
          prePrintDelay: line?.segments[segmentIndex]?.prePrintDelay,
          postPrintDelay: line?.segments[segmentIndex]?.postPrintDelay,
        };
        if (printedSegments[segmentIndex] === undefined) {
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

  }, [segmentIndex, lineIsDone, line?.segments, printedSegments, line]);

  return (
    <PrintedLine id={id}>
      <span>{promptChars}</span>
      {printedSegments.map((segment, index) => {
        const segmentPrinterId = (id ? id + '-' : '') + `segment${index}`;
        return (
          <SegmentPrinter
            id={segmentPrinterId}
            key={segmentPrinterId}
            segment={segment}
            segmentIndex={index}
            isLastSegment={index === line.segments.length - 1}
            finalCursorDisplay={finalCursorDisplay}
            typingSpeed={typingSpeed}
            instantPrint={instantPrint}
            isLastLine={isLastLine}
            printNextSegment={printNextSegment}
          />
        );
      })}
    </PrintedLine>
  );
}

export default LinePrinter;
