import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import LinePrinter, { Line } from './LinePrinter';
import { checkIfCursorIsBlinking, checkIfCursorIsHidden } from '../../utils/TestUtilities';

describe('LinePrinter', () => {

  it('renders correctly with no segments', async () => {
    const line: Line = { segments: [] };
    const renderedComponent = render(<LinePrinter
      id="line0"
      line={line}
      lineIndex={0}
      typingSpeed={0}
      instantPrint={true}
      isLastLine={false}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      printNextLine={() => {}} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    await waitFor(async () => {
      expect(renderedComponent.container.querySelector('#line0')).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('renders correctly with one segment where there are no more lines', async () => {
    const line: Line = { segments: [{ text: '' }] };
    const renderedComponent = render(<LinePrinter
      id="line0"
      line={line}
      lineIndex={0}
      typingSpeed={0}
      instantPrint={true}
      isLastLine={true} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    await waitFor(async () => {
      expect(renderedComponent.container.querySelector('#line0-segment0')).toBeInTheDocument();
      const cursorElement = renderedComponent.container.querySelector('#line0-segment0-cursor');
      expect(cursorElement).toBeInTheDocument();
      checkIfCursorIsBlinking(cursorElement);
    }, { timeout: 1000 });
  });

  it('renders correctly with two segments but there are no more lines', async () => {
    const line: Line = { segments: [{ text: '' }, { text: '' }] };
    const renderedComponent = render(<LinePrinter
      id="line0"
      line={line}
      lineIndex={0}
      typingSpeed={0}
      instantPrint={true}
      isLastLine={true} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    await waitFor(async () => {
      expect(renderedComponent.container.querySelector('#line0-segment0')).toBeInTheDocument();
      const cursorElement0 = renderedComponent.container.querySelector('#line0-segment0-cursor');
      expect(cursorElement0).toBeInTheDocument();
      checkIfCursorIsHidden(cursorElement0);
      const cursorElement1 = renderedComponent.container.querySelector('#line0-segment1-cursor');
      expect(cursorElement1).toBeInTheDocument();
      checkIfCursorIsBlinking(cursorElement1);
    }, { timeout: 1000 });
  });

  it('renders correctly with two segment where there are additional lines to follow', async () => {
    const line: Line = { segments: [{ text: '' }, { text: '' }] };
    const renderedComponent = render(<LinePrinter
      id="line0"
      line={line}
      lineIndex={0}
      typingSpeed={0}
      instantPrint={true}
      isLastLine={false} />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    await waitFor(async () => {
      expect(renderedComponent.container.querySelector('#line0-segment0')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#line0-segment0-cursor')).toBeInTheDocument();
      const cursorElement0 = renderedComponent.container.querySelector('#line0-segment0-cursor');
      expect(cursorElement0).toBeInTheDocument();
      checkIfCursorIsHidden(cursorElement0);
      const cursorElement1 = renderedComponent.container.querySelector('#line0-segment1-cursor');
      expect(cursorElement1).toBeInTheDocument();
      checkIfCursorIsHidden(cursorElement1);
    }, { timeout: 1000 });
  });

});
