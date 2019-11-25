import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { faRocket, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, SEO, StarCanvas } from '../components';
import { variables as styleVariables } from '../components/GlobalStyle';

const BlockButton = styled(Button)`
  display: block;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    margin: 0 0 0 ${2 * styleVariables.baselinePixels}px;
    width: auto;
  }
`;

const ButtonContainer = styled.div`
  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 0 auto;
//   width: 100%;

//   @media (min-width: ${styleVariables.breakpoint.sm}px) {
//     max-width: 540px;
//   }

//   @media (min-width: ${styleVariables.breakpoint.md}px) {
//     max-width: 720px;
//   }

//   @media (min-width: ${styleVariables.breakpoint.lg}px) {
//     max-width: 960px;
//   }

//   @media (min-width: ${styleVariables.breakpoint.xl}px) {
//     max-width: 1140px;
//   }
// `;
const Lead = styled.p`
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};
  margin-bottom: ${2 * styleVariables.baselinePixels}px;
  max-width: 33em;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h5.md.rem}rem;
    line-height: ${styleVariables.h5.md.lg};
  }
`;

const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  margin-bottom: ${2 * styleVariables.baselinePixels}px;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${styleVariables.h4.xs.rem}rem;
  line-height: ${styleVariables.h4.xs.lh};
  white-space: nowrap;

  ::before {
    content: '// ';
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h3.md.rem}rem;
    line-height: ${styleVariables.h3.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.h3.lg.rem}rem;
    line-height: ${styleVariables.h3.lg.lh};
  }
`;

export default function IndexPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex" {...restProps}>
      <SEO title="Home" />
      <StyledStarCanvas coveredElementSelector="body" twinkle />
      <Container>
        <Title>
          Nathaniel&nbsp;J. Liberty <br />
          <Subtitle>Software Developer</Subtitle>
        </Title>
        <Lead>
          Driven software developer using JavaScript and web technologies to
          build creative solutions for the healthcare industry and more.
        </Lead>
        <ButtonContainer>
          <StyledLink to="/contact">
            <BlockButton size="large" type="button">
              <StyledIcon icon={faSatellite} />
              Make contact
            </BlockButton>
          </StyledLink>
          <StyledLink to="/projects">
            <BlockButton size="large" type="button">
              <StyledIcon icon={faRocket} />
              Explore my work
            </BlockButton>
          </StyledLink>
        </ButtonContainer>
      </Container>
    </Layout>
  );
}
