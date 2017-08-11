import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import homeBackground from '../assets/home-bg-repeat.png';
import media from '../media';

const Root = styled.div`
  text-align: center;
  position: relative;
  height: 460px;
  background-repeat: repeat;
  background-image: url(${homeBackground});
  background-position: -70px -70px;
  overflow: hidden;
  ${media.tablet`height: 500px;`};
  ${media.desktop`height: 600px;`};
`;

const Title = styled.h2`
  margin: 10px 0 0 0;
  font-weight: normal;
  font-size: 25px;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.dandelion};
`;

const SubTitle = styled.h3`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.white};
`;

const Logo = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Background = styled.div`
  position: absolute;
  height: 200px;
  width: 200%;
  transform: rotateZ(-5deg) translateX(-50%) translateY(100%);
  background-color: ${props => props.theme.colors.blackcurrant};
`;

export default function Header() {
  return (
    <Root>
      <Logo>
        <img src={logo} alt="logo" />
        <Title>Clever Monkey</Title>
        <SubTitle>Expert ReactNative</SubTitle>
      </Logo>
      <Background />
    </Root>
  );
}
