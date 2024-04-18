import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';

interface ProportionalScrollElementProps {
  scrollPercentage: number;
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const ScrolledElement = styled.div<{$scrollPosition: number, children: ReactNode}>`
  position: absolute;
  top: ${(props) => `-${props.$scrollPosition}px`};
  height: 100%;
  width: 100%;
`;

const ProportionalScrollElement: React.FC<ProportionalScrollElementProps> = ({ scrollPercentage, children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition * scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPercentage]);

  return (
    <Container id="ProportionalScrollElement">
      <ScrolledElement $scrollPosition={scrollPosition}>
        {children}
      </ScrolledElement>
    </Container>
  );
};

export default ProportionalScrollElement;
