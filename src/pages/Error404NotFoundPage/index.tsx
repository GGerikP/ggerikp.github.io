import React from 'react';
import styled from 'styled-components';

const NotFoundPageWrapperDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NotFoundContentBox = styled.div`
  max-width: 600px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: white;
  border: solid 1px black;
  padding: 20px;
  margin: 20px;
`;

const ErrorMessage = styled.div`
  width: 100%;
`;

const Error404NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageWrapperDiv>
      <NotFoundContentBox>
        <h1>Error: 404</h1>
        <ErrorMessage>
          <p>We're sorry but the page you've navigated to could not be found.</p>
          <a href="/"><p>Back to home</p></a>
        </ErrorMessage>
      </NotFoundContentBox>
    </NotFoundPageWrapperDiv>
  );
};

export default Error404NotFoundPage;