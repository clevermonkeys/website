import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './components/Header';
import About from './components/About';

const Root = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Header />
        <About />
      </Root>
    </ThemeProvider>
  );
}

export default App;
