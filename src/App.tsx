import React from 'react';
// COMPONENTS
import Content from './components/Content/Content';
// STYLES
import styled from 'styled-components';
import Block from './components/Block/Block';

const AppWrapper = styled.div`
  background-color: #f6f6f8;
  display: flex;
  margin: 4% auto 0 auto;
  width: 1280px;
  border-radius: 10px;
  height: 630px;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;

const App = () => {
  return (
    <AppWrapper>
      <Block />
      <Content />
    </AppWrapper>
  );
};

export default App;
