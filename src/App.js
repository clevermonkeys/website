import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import logo from './assets/logo.svg';
import homeBackground from './assets/home-bg-repeat.png';

const Root = styled.div``;

const Header = styled.div`
  text-align: center;
  position: relative;
  height: 600px;
  background-repeat: repeat;
  background-image: url(${homeBackground});
  background-position: -70px -70px;
  overflow: hidden;
`;

const HeaderTitle = styled.h2`
  margin: 10px 0 0 0;
  font-weight: normal;
  font-size: 25px;
  color: ${props => props.theme.colors.dandelion};
`;

const HeaderSubTitle = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 1.5px;
  color: ${props => props.theme.colors.white};
`;

const HeaderLogo = styled.div`
  position: relative;
  top: 157px;
`;

const HeaderBg = styled.div`
  position: absolute;
  height: 200px;
  width: 200%;
  left: -50%;
  bottom: -15%;
  transform: rotateZ(-7deg);
  background-color: ${props => props.theme.colors.blackcurrant};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Header>
          <HeaderLogo>
            <img src={logo} alt="logo" />
            <HeaderTitle>Clever Monkey</HeaderTitle>
            <HeaderSubTitle>
              {/* Freelance Software Developer */}
              Expert ReactNative
            </HeaderSubTitle>
          </HeaderLogo>
          <HeaderBg />
        </Header>
      </Root>
    </ThemeProvider>
  );
}

export default App;
