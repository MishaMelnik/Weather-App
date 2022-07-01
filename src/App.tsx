import React from 'react';
// COMPONENTS
import Content from './components/Content/Content';
import Block from './components/Block/Block';
// STYLES
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #f6f6f8;
  display: grid;
  grid-template-areas: 'b c';
  width: 1280px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  @media (max-width: 1280px) {
    width: 1024px;
  }
  @media (max-width: 1026px) {
    width: 800px;
  }
  @media (max-width: 868px) {
    width: 700px;
  }
  @media (max-width: 770px) {
    width: 678px;
  }
  @media (max-width: 679px) {
    width: 525px;
  }
  @media (max-width: 526px) {
    grid-template-areas:
      'b'
      'c';
    width: 350px;
  }
`;
const AppBlock = styled.div`
  grid-area: b;
`;
const AppContent = styled.div`
  grid-area: c;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppBlock>
        <Block />
      </AppBlock>
      <AppContent>
        <Content />
      </AppContent>
    </AppWrapper>
  );
};

export default App;
