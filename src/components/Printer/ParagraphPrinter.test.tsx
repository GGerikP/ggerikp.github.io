import React from 'react';
import '@testing-library/jest-dom';
import ParagraphPrinter from './ParagraphPrinter';
import { Line } from './LinePrinter';
import { render, waitFor } from '@testing-library/react';
import { checkIfCursorIsBlinking, checkIfCursorIsHidden } from '../../utils/TestUtilities';

// import axios from 'axios';
jest.mock('axios');

describe('ParagraphPrinter Unit Tests.', () => {
  it('Renders a ParagraphPrinter with 1 line with 1 segment', async () => {
    const lines: Line[] = [{
      segments: [{
        text: ''
      }]
    }];
    const renderedComponent = render(<ParagraphPrinter
      id="Tab0"
      lines={lines}
      typingSpeed={0}
      promptChars='$ '
      instantPrint={false}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setPrintingState={() => {}}
    />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph')).toBeInTheDocument();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0')).toBeInTheDocument();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0')).toBeInTheDocument();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0-cursor')).toBeInTheDocument();

    // Check the cursor - should be blinking
    checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0-cursor'));
  }, 500);

  it('Renders a ParagraphPrinter with 1 line with 2 segments', async () => {
    const lines: Line[] = [{
      segments: [{
        text: ''
      }, {
        text: ''
      }]
    }];
    const renderedComponent = render(<ParagraphPrinter
      id="Tab0"
      lines={lines}
      typingSpeed={0}
      promptChars='$ '
      instantPrint={false}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setPrintingState={() => {}}
    />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph')).toBeInTheDocument();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0')).toBeInTheDocument();
    waitFor(() => {
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0-cursor')).toBeInTheDocument();
      checkIfCursorIsHidden(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0-cursor'));

      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment1')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment1-cursor')).toBeInTheDocument();
      checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment1-cursor'));
    }, { timeout: 500 });
  }, 500);

  it('Renders a ParagraphPrinter with 5 lines, each with 5 segments', async () => {
    const lines: Line[] = [{
      segments: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }]
    }, {
      segments: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }]
    }, {
      segments: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }]
    }, {
      segments: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }]
    }, {
      segments: [{ text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }]
    }];
    const renderedComponent = render(<ParagraphPrinter
      id="Tab0"
      lines={lines}
      typingSpeed={0}
      promptChars='$ '
      instantPrint={true}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setPrintingState={() => {}}
    />);
    expect(renderedComponent.asFragment()).toMatchSnapshot();
    expect(renderedComponent.container.querySelector('#Tab0-paragraph')).toBeInTheDocument();
    waitFor(() => {
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0-cursor')).toBeInTheDocument();
      checkIfCursorIsHidden(renderedComponent.container.querySelector('#Tab0-paragraph-line0-segment0-cursor'));

      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line1')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line1-segment1')).toBeInTheDocument();
      checkIfCursorIsHidden(renderedComponent.container.querySelector('#Tab0-paragraph-line1-segment1-cursor'));
    }, { timeout: 500 });
    waitFor(() => {
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line4')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line4-segment4')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line4-segment4-cursor')).toBeInTheDocument();
      checkIfCursorIsHidden(renderedComponent.container.querySelector('#Tab0-paragraph-line4-segment4-cursor'));

      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line5')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Tab0-paragraph-line5-segment5')).toBeInTheDocument();
      checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Tab0-paragraph-line5-segment5-cursor'));
    }, { timeout: 500 });
  }, 500);
});
