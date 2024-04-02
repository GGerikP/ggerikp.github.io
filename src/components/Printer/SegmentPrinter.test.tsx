import React from 'react';
import '@testing-library/jest-dom';
import SegmentPrinter, { Segment } from './SegmentPrinter';
import { render, waitFor } from '@testing-library/react';
import { checkIfCursorIsBlinking, checkIfCursorIsHidden } from '../../utils/TestUtilities';

describe('SegmentPrinter Tests', () => {

  const mockPrintNextSegment = jest.fn();

  it('Renders a single empty segment with no lines or segments to follow', async () => {
    const segment: Segment = {
      text: ''
    };
    const renderedComponent = render(<SegmentPrinter
      segment={segment}
      segmentIndex={0}
      isLastSegment={true}
      isLastLine={true}
      typingSpeed={0}
      instantPrint={false}
      printNextSegment={mockPrintNextSegment} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
    await waitFor(() => { expect(mockPrintNextSegment).toHaveBeenCalledTimes(1); }, { timeout: 500 });

    // Check the cursor - should be blinking
    checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Cursor\\:0'));
  }, 50000);

  it('Renders a single empty segment with more segments to follow', async () => {
    const segment: Segment = {
      text: ''
    };
    const renderedComponent = render(<SegmentPrinter
      segment={segment}
      segmentIndex={0}
      isLastSegment={false}
      isLastLine={true}
      typingSpeed={0}
      instantPrint={false}
      printNextSegment={mockPrintNextSegment} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
    await waitFor(() => { expect(mockPrintNextSegment).toHaveBeenCalledTimes(1); }, { timeout: 500 });

    // Check the cursor - should be hidden
    checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:0'));
  }, 50000);

  it('Renders a SegmentPrinter with a single character of text and it is the last segment and last line', async () => {
    const segment: Segment = {
      text: 'a'
    };
    const renderedComponent = render(<SegmentPrinter
      segment={segment}
      segmentIndex={0}
      isLastSegment={true}
      isLastLine={true}
      typingSpeed={0}
      instantPrint={false}
      printNextSegment={mockPrintNextSegment} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
    await waitFor(async () => {
      const element = await renderedComponent.findByText(/a.*/);
      expect(element).toBeInTheDocument();
    }, { timeout: 250 });
    await waitFor(() => { expect(mockPrintNextSegment).toHaveBeenCalledTimes(1); }, { timeout: 100 });

    // Check the cursor - should e blinking
    checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Cursor\\:0'));
  });

  it('Renders a SegmentPrinter with a single character of text but there are more segments to print', async () => {
    const longText = 'AVeryLongStringPrintedOverAndOverAgain.';
    const segment: Segment = {
      text: longText
    };
    const renderedComponent = render(<SegmentPrinter
      segment={segment}
      segmentIndex={0}
      isLastSegment={false}
      isLastLine={false}
      typingSpeed={0}
      instantPrint={false}
      printNextSegment={mockPrintNextSegment} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
    await waitFor(async () => {
      const element = await renderedComponent.findByText(new RegExp(longText + '.*'));
      expect(element).toBeInTheDocument();
    }, { timeout: 500 });
    await waitFor(() => { expect(mockPrintNextSegment).toHaveBeenCalledTimes(1); }, { timeout: 250 });

    // Check the cursor
    checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:0'));
  });

  it('Renders a SegmentPrinter with a single character of text but there are more segments to print', async () => {
    const longText = 'AVeryLongStringPrintedOverAndOverAgain.';
    const segment: Segment = {
      text: longText
    };
    const renderedComponent = render(<SegmentPrinter
      segment={segment}
      segmentIndex={0}
      isLastSegment={false}
      isLastLine={true}
      typingSpeed={0}
      instantPrint={false}
      printNextSegment={mockPrintNextSegment} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
    await waitFor(async () => {
      const element = await renderedComponent.findByText(new RegExp(longText + '.*'));
      expect(element).toBeInTheDocument();
    }, { timeout: 500 });
    await waitFor(() => { expect(mockPrintNextSegment).toHaveBeenCalledTimes(1); }, { timeout: 250 });

    // Check the cursor
    checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:0'));
  });

  it('Renders a SegmentPrinter with a large string of text instantly with instantPrint set to true', async () => {

    const longText = 'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.' +
            'AVeryLongStringPrintedOverAndOverAgain.';
    const segment: Segment = {
      text: longText
    };
    const renderedComponent = render(<SegmentPrinter
      segment={segment}
      segmentIndex={0}
      isLastSegment={true}
      typingSpeed={0}
      instantPrint={true}
      isLastLine={true}
      printNextSegment={mockPrintNextSegment} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
    await waitFor(async () => {
      const element = await renderedComponent.findByText(new RegExp(longText + '.*'));
      expect(element).toBeInTheDocument();
    }, { timeout: 5000 });
    await waitFor(() => { expect(mockPrintNextSegment).toHaveBeenCalledTimes(1); }, { timeout: 100 });
  }, 10000);
});