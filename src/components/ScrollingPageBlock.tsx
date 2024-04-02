import React, { ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';

interface PageContainerProps {
  height: number;
}

const PageContainer = styled.div<PageContainerProps>`
width: 100%;
max-width: 100%;
height: ${props => props.height}px; 
overflow: hidden;
`;

interface ScrollingPageBlockProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

function ScrollingPageBlock ({ children, style }: ScrollingPageBlockProps) {

  // State to hold the dynamic height
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  // Function to update the height when the window is resized
  const handleResize = () => {
    setPageHeight(window.innerHeight);
  };

  // Attach an event listener to the window for the resize event
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageContainer style={style} height={pageHeight}>
      {children}
    </PageContainer>
  );
}

export default ScrollingPageBlock;
