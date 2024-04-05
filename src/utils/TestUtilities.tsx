// Util Functions
export const checkIfCursorIsBlinking = (cursorElement: Element | null) => {
  const style = cursorElement ? getComputedStyle(cursorElement) : new CSSStyleDeclaration();
  expect(cursorElement).toBeInTheDocument();
  expect(cursorElement).toHaveStyle('display: inline-block;');
  expect(cursorElement).toHaveStyle('border-left: 2px solid white;');
  expect(style.getPropertyValue('animation')).toMatch(/.*\.5s step-end 0s infinite.*/);
};

export const checkIfCursorIsHidden = (cursorElement: Element | null) => {
  expect(cursorElement).toBeInTheDocument();
  expect(cursorElement).toHaveStyle('display: none;');
};

