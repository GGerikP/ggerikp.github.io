import React from 'react';
import styled from 'styled-components';
import GenericPageWrapper from '../../components/GenericPageWrapper';

const NotFoundPageWrapperDiv = styled.div`
`;

const Error404NotFoundPage: React.FC = () => {
  return (
    <GenericPageWrapper>
      <NotFoundPageWrapperDiv>
        <h1>Error: 404</h1>
        <h1>We're sorry but the page you've navigated to could not be found!</h1>
      </NotFoundPageWrapperDiv>
    </GenericPageWrapper>
  );
};

export default Error404NotFoundPage;