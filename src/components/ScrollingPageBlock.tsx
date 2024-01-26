import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../theme';

interface PageProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

const PageContainer = styled.div`
width: 100%;
max-width: 100%;
min-height: 650px;
height: 650px;
overflow: hidden;
@media (min-width: ${theme.breakpoints.mobile}) {
    min-height: 800px;
    height: 800px;
}
@media (min-width: ${theme.breakpoints.tablet}) {
    min-height: 1000px;
    height: 1000px;
}
`;

const Page: React.FC<PageProps> = ({ children, style }) => {
  return (
    <PageContainer style={style}>
      {children}
    </PageContainer>
  );
};

export default Page;
