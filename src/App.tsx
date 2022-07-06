import React, { useContext, useEffect } from 'react';
// PACKAGE
import styled from 'styled-components';
// COMPONENTS
import Content from './components/Content/Content';
import Block from './components/Block/Block';
// THEME
import { size } from './styles/theme/sizes';
import { lightTheme } from './styles/theme/colorsLight';
import { boxShadow } from './styles/theme/boxShadow';
import { GlobalContext } from './context/GlobalState';
import { getLocation } from './functions/getLocation';

const AppWrapper = styled.div`
  background-color: ${lightTheme.appBackgroundColor};
  display: grid;
  grid-template-areas: 'block content';
  max-width: 1280px;
  margin: 0 30px;
  border-radius: 10px;
  box-shadow: ${boxShadow.appBoxShadow};
  @media (max-width: ${size.mobileL}) {
    grid-template-areas:
      'block'
      'content';
  }
`;
const AppBlock = styled.div`
  grid-area: block;
`;
const AppContent = styled.div`
  grid-area: content;
`;

const App = () => {
  const { setWeather } = useContext(GlobalContext);
  useEffect(() => {
    getLocation(setWeather);
  }, []);

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
