import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Cursor, { CursorDisplay } from './Cursor';

describe('Cursor component', () => {
  it('renders with stable cursor display', () => {
    const { container } = render(<Cursor cursorDisplay={CursorDisplay.Stable} index={0} />);
    const cursorElement = container.querySelector('#Cursor\\:0');    
    expect(cursorElement).toBeInTheDocument();
    expect(cursorElement).toHaveStyle('display: inline-block;');
    expect(cursorElement).toHaveStyle('border-left: 2px solid white;');
  });

  it('renders with blinking cursor display', () => {
    const { container } = render(<Cursor cursorDisplay={CursorDisplay.Blink} index={0} />);
    const cursorElement = container.querySelector('#Cursor\\:0');
    expect(cursorElement).toBeInTheDocument();
    expect(cursorElement).toHaveStyle('display: inline-block;');
    expect(cursorElement).toHaveStyle('border-left: 2px solid white;');
    const style = cursorElement ? getComputedStyle(cursorElement) : new CSSStyleDeclaration();
    expect(style.getPropertyValue('animation')).toMatch(/.*\.5s step-end infinite.*/);
  });

  it('renders with hidden cursor display', () => {
    const { container } = render(<Cursor cursorDisplay={CursorDisplay.Hidden} index={0} />);
    const cursorElement = container.querySelector('#Cursor\\:0');
    expect(cursorElement).toBeInTheDocument();
    expect(cursorElement).toHaveStyle('display: none;');
  });
});
