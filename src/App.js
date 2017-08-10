import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import logo from './logo.svg';

const Root = styled.div``;
/* background-color: ${props => props.theme.colors.blackcurrant}; */
/* background-image: url(${background}); */
const Header = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.dandelion};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Header>
          <img src={logo} alt="logo" />
          <h2>Clever Monkey</h2>
        </Header>
      </Root>
    </ThemeProvider>
  );
}

export default App;
