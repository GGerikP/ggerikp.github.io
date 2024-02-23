import React from 'react';
import { render } from '@testing-library/react';
import Cursor, { CursorDisplay } from './Cursor';
import '@testing-library/jest-dom'

describe('Cursor component', () => {
  test('renders with stable cursor display', () => {
    const { container } = render(<Cursor cursorDisplay={CursorDisplay.Stable} />);
    const cursorElement = container.querySelector('#cursor');
    
    expect(cursorElement).toBeInTheDocument();
    expect(cursorElement).toHaveStyle('display: inline-block;');
    expect(cursorElement).toHaveStyle('border-left: 2px solid white;');
  });

  test('renders with blinking cursor display', () => {
    const { container } = render(<Cursor cursorDisplay={CursorDisplay.Blink} />);
    const cursorElement = container.querySelector('#cursor');
    
    expect(cursorElement).toBeInTheDocument();
    expect(cursorElement).toHaveStyle('display: inline-block;');
    expect(cursorElement).toHaveStyle('border-left: 2px solid white;');
  });

  test('renders with hidden cursor display', () => {
    const { container } = render(<Cursor cursorDisplay={CursorDisplay.Hidden} />);
    const cursorElement = container.querySelector('#cursor');
    
    expect(cursorElement).toBeInTheDocument();
    expect(cursorElement).toHaveStyle('display: none;');
  });
});
