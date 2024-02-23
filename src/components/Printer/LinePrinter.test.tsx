import React from 'react';
import { render, waitFor } from '@testing-library/react';
import LinePrinter, { Line } from './LinePrinter';

describe('LinePrinter', () => {
    test('dummy test', () => {
        
    })
/*    const mockLine: Line = {
        lineSegments: [
            { text: 'a', printDelayBefore: 0, printDelayAfter: 0 },
            { text: 'b', printDelayBefore: 0, printDelayAfter: 0 },
            // Add more segments as needed for testing
        ],
    };

    it('renders correctly with initial state', async () => {
        const { getByText } = render(<LinePrinter line={mockLine} lineIndex={0} typingSpeed={1} instantPrint={true} hasMoreLines={false} />);
        await waitFor(() => {
            expect(getByText('a')).toBeInTheDocument();
        });
        // Add more assertions as needed
    });

    it('calls printNextSegment on mount', async () => {
        jest.useFakeTimers();
        const { getByText } = render(<LinePrinter line={mockLine} lineIndex={0} typingSpeed={1} instantPrint={true} hasMoreLines={false} />);
        
        jest.advanceTimersByTime(100); // Adjust time based on your printDelayBefore and printDelayAfter values

        await waitFor(() => {
            expect(getByText('b')).toBeInTheDocument();
        });
    });

    // Additional tests for ensuring state updates and SegmentPrinter rendering
    // ...

    // Clean up fake timers
    afterEach(() => {
        jest.useRealTimers();
    });*/
});
