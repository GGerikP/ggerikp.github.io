import React from 'react';
import '@testing-library/jest-dom';
import ParagraphPrinter from './ParagraphPrinter';
import { Line } from './LinePrinter';
import { render, waitFor } from '@testing-library/react';
import { checkIfCursorIsBlinking, checkIfCursorIsHidden } from '../../utils/TestUtilities';

describe('ParagraphPrinter Unit Tests.', () => {
    it('Renders a ParagraphPrinter with 1 line with 1 segment', async () => {
        const lines: Line[] = [{
            segments: [{
                text: ''
            }]
        }]
        const renderedComponent = render(<ParagraphPrinter
            lines={lines}
            typingSpeed={0}
            promptChars='$ '
            instantPrint={false}
            setPrintingState={() => {}}
        />);
        expect(renderedComponent.asFragment()).toMatchSnapshot();
        expect(renderedComponent.container.querySelector('#ParagraphPrinter')).toBeInTheDocument();
        expect(renderedComponent.container.querySelector('#LinePrinter\\:0')).toBeInTheDocument();
        expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
        expect(renderedComponent.container.querySelector('#Cursor\\:0')).toBeInTheDocument();

    // Check the cursor - should be blinking
    checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Cursor\\:0'));
  }, 500);

    it('Renders a ParagraphPrinter with 1 line with 2 segments', async () => {
        const lines: Line[] = [{
            segments: [{
                text: ''
            }, {
                text: ''
            }]
        }]
        const renderedComponent = render(<ParagraphPrinter
            lines={lines}
            typingSpeed={0}
            promptChars='$ '
            instantPrint={false}
            setPrintingState={() => {}}
        />);
        expect(renderedComponent.asFragment()).toMatchSnapshot();
        expect(renderedComponent.container.querySelector('#ParagraphPrinter')).toBeInTheDocument();
        expect(renderedComponent.container.querySelector('#LinePrinter\\:0')).toBeInTheDocument();
        waitFor(() => {
            expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
            expect(renderedComponent.container.querySelector('#Cursor\\:0')).toBeInTheDocument();
            checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:0'));

      expect(renderedComponent.container.querySelector('#SegmentPrinter\\:1')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Cursor\\:1')).toBeInTheDocument();
      checkIfCursorIsBlinking(renderedComponent.container.querySelector('#Cursor\\:1'));
    }, { timeout: 500 });
  }, 500);

    it('Renders a ParagraphPrinter with 5 lines, each with 5 segments', async () => {
        const lines: Line[] = [{
            segments: [{text: ''}, {text: ''}, {text: ''}, {text: ''}, {text: ''}]
        }, {
            segments: [{text: ''}, {text: ''}, {text: ''}, {text: ''}, {text: ''}]
        }, {
            segments: [{text: ''}, {text: ''}, {text: ''}, {text: ''}, {text: ''}]
        }, {
            segments: [{text: ''}, {text: ''}, {text: ''}, {text: ''}, {text: ''}]
        }, {
            segments: [{text: ''}, {text: ''}, {text: ''}, {text: ''}, {text: ''}]
        }]
        const renderedComponent = render(<ParagraphPrinter
            lines={lines}
            typingSpeed={0}
            promptChars='$ '
            instantPrint={true}
            setPrintingState={() => {}}
        />);
        expect(renderedComponent.asFragment()).toMatchSnapshot();
        expect(renderedComponent.container.querySelector('#ParagraphPrinter')).toBeInTheDocument();
        waitFor(() => {
            expect(renderedComponent.container.querySelector('#LinePrinter\\:0')).toBeInTheDocument();
            expect(renderedComponent.container.querySelector('#SegmentPrinter\\:0')).toBeInTheDocument();
            expect(renderedComponent.container.querySelector('#Cursor\\:0')).toBeInTheDocument();
            checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:0'));

      expect(renderedComponent.container.querySelector('#SegmentPrinter\\:1')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Cursor\\:1')).toBeInTheDocument();
      checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:1'));
    }, { timeout: 500 });
    waitFor(() => {
      expect(renderedComponent.container.querySelector('#LinePrinter\\:5')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#SegmentPrinter\\:5')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#Cursor\\:5')).toBeInTheDocument();
      checkIfCursorIsHidden(renderedComponent.container.querySelector('#Cursor\\:0'));

      expect(renderedComponent.container.querySelector('#LinePrinter\\:5 #SegmentPrinter\\:5')).toBeInTheDocument();
      expect(renderedComponent.container.querySelector('#LinePrinter\\:5 #SegmentPrinter\\:5 #Cursor\\:5')).toBeInTheDocument();
      checkIfCursorIsBlinking(renderedComponent.container.querySelector('#LinePrinter\\:5 #SegmentPrinter\\:5 #Cursor\\:5'));
    }, { timeout: 500 });
  }, 500);
});
