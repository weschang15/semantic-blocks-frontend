import React from "react";
import styled from "styled-components";
import Illustration from "../../images/hero-illustration.svg";
import { darken, transparentize, lighten } from "polished";
import { Anchor } from "../../elements/Links";
import { Section } from "../../elements";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 3em;
`;

const Grid = styled.div`
  width: 100%;
  @media only screen and (min-width: 64em) {
    align-items: center;
    display: grid;
    grid-template-columns: minmax(auto, 720px) minmax(500px, 960px);
    justify-content: center;
    grid-column-gap: 2em;
  }
`;

const Content = styled.div`
  @media only screen and (min-width: 64em) {
    margin: 0 auto;
    max-width: 330px;
  }

  ${Anchor} {
    color: ${({ theme }) => theme.colors.darkGray};
    display: inline-block;
    font-size: 16px;
    letter-spacing: 0.25px;
    margin: 1em;
    text-decoration-color: ${({ theme }) => theme.colors.lightGray};
    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

const Figure = styled.figure`
  margin: 2em 0 0;
  display: none;

  @media only screen and (min-width: 30em) {
    display: block;
  }

  @media only screen and (min-width: 64em) {
    margin: 0;
  }
`;

const DownloadLink = styled.a`
  background-color: ${({ theme }) => theme.colors.blue};
  border: 1px solid transparent;
  border-radius: 6px;
  display: inline-block;
  padding: 0.75em 1em;
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 0.25px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  transition: 125ms background-color ease-out, 125ms border-color ease-out;
  text-align: center;
  font-weight: 600;
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.white},
      0 0 0 4px ${({ theme }) => darken(0.05, theme.colors.blue)};
    outline: 0;
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.15, theme.colors.blue)};
  }
  &:active {
    background-color: ${({ theme }) => darken(0.05, theme.colors.blue)};
    border-color: ${({ theme }) => darken(0.05, theme.colors.blue)};
    transform: translateY(1px);
    transition: none;
  }
`;

const Underlined = styled.span`
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    z-index: -1;
    background-color: ${({ theme }) => transparentize(0.8, theme.colors.blue)};
    transform: ${({ reversed }) =>
      reversed ? "skewX(-18deg) skewY(-2deg)" : "skewX(18deg) skewY(-2deg)"};
    margin: 8px -10px 2px -10px;
    border-radius: 12px;
  }
`;

const Copy = styled.p``;

const Title = styled.h1`
  @media only screen and (min-width: 40em) {
    ${Underlined} {
      display: inline-block;
    }
  }
`;

const Footnote = styled.small`
  display: block;
  margin-top: 1em;
  font-size: 14px;
  color: ${({ theme }) => lighten(0.3, theme.colors.darkGray)};
`;

function Hero() {
  return (
    <Section>
      <Container>
        <Grid>
          <Content>
            <Title>
              <Underlined>Semantic</Underlined>
              <br />
              <Underlined reversed>Blocks</Underlined>
            </Title>
            <Copy>
              Gutenberg Blocks optimized for on-page SEO and Structured Data.
            </Copy>
            <DownloadLink
              href="https://github.com/weschang15/semantic-blocks/raw/v0.0.2/semantic-blocks.zip"
              download
            >
              Download Now
            </DownloadLink>
            <Anchor to="/#demo">Watch a demo</Anchor>
            <Footnote>Currently in beta...</Footnote>
          </Content>
          <Figure>
            <img
              src={Illustration}
              alt="Easy WordPress page customizations with Semantic Blocks"
            />
          </Figure>
        </Grid>
      </Container>
    </Section>
  );
}

export default Hero;
