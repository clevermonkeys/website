import React from 'react';
import styled from 'styled-components';
import media from '../media';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import github from '../assets/github.svg';

const Root = styled.div`
  margin: 0 15%;
  ${media.mobile`   
   &:before {
      content:"";
      display: table;
      border: solid 1px ${props => props.theme.colors.dandelion};
      width: 110px;
      position: absolute;
      margin-top: 40px;
    }
  `};
  ${media.tablet`   
   &:before {
      content:"";
      display: table;
      border: solid 1px ${props => props.theme.colors.dandelion};
      width: 110px;
      position: absolute;
      margin-top: 50px;
    }
  `};
  ${media.desktop`
    position: relative;
    padding-left: 47%;
    margin: 0;
    transform: translateX(-100px);
    &:before {
      content:"";
      display: table;
      border: solid 1px ${props => props.theme.colors.dandelion};
      width: 200px;
      position: absolute;
      margin-left: -220px;
      margin-top: 100px;
    }
  `};
`;
const Title = styled.div`
  ${media.tablet`
    float: left;
  `};
`;
const TitleTxt = styled.h4`
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.white};
  font-size: 27px;
  font-weight: normal;
  margin: 0 0 10px 0;
`;

const Description = styled.div`
  text-align: left;
  ${media.tablet`
    float: left;
    margin-left: 60px;
    width: 360px;
  `};
  ${media.desktop`
    width: 65%;
  `};
`;
const DescriptionTxt = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 100;
  line-height: 32px;
  ${media.desktop`
    font-size: 17px;
    line-height: 38px;
   `};
`;

const Shared = styled.div`
  margin-top: 30px;
  ${media.desktop`
    margin-top:0;
  `};
`;

export default function About() {
  return (
    <Root>
      <Title>
        <TitleTxt>À propos</TitleTxt>
        <Shared>
          <a
            href="https://www.linkedin.com/in/mickael-dumand-5b4a9098"
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://twitter.com/MeKimak"
            target="_blank"
            rel="noopener noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a
            href="https://github.com/kimak"
            target="_blank"
            rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
        </Shared>
      </Title>
      <Description>
        <DescriptionTxt>
          Mon nom est Mickael Dumand, aka « Kimak ». Je suis{' '}
          <b>développeur et formateur front-end freelance</b>. Expert en
          technologies React et ReactNative, j{"'"}accompagne{' '}
          <b>startups, écoles, agences ou grands comptes</b> sur les missions
          suivantes:
          <br />
          <br />
          <b>- Architecture</b> et développement d{"'"}applications
          <br />
          <b>- Formation</b> et montée en compétences
          <br />
          <b>- Audit</b> de code et/ou performance
          <br />
          <b>- Aide au recrutement</b>
          <br />
          <br />J{"'"}interviens essentiellement sur les technologies React et
          ReactNative avec pour objectifs: <br />
          <b>qualité et productivité</b>.
        </DescriptionTxt>
      </Description>
    </Root>
  );
}
