import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, Lead, SEO, StarCanvas } from '../components';
import { variables as styleVariables } from '../components/GlobalStyle';

const BlockButton = styled(Button)`
  display: block;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    margin: 0 0 0 auto;
    width: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 33rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  margin-bottom: ${2 * styleVariables.baselinePixels}px;
`;

export default function NotFoundPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex" {...restProps}>
      <SEO title="404 Error: Page Not Found" />
      <StyledStarCanvas coveredElementSelector="body" twinkle />
      <Container>
        <Title>404 Error: Page&nbsp;Not&nbsp;Found</Title>
        <Lead>Oops!</Lead>
        <p>
          You have requested a resource that does not exist; or worse, I have
          somehow sent you to the edge of a black hole.
        </p>
        <p>…Either way, you should probably go back.</p>
        <BlockButton forwardedAs={Link} size="large">
          <StyledIcon icon={faGlobeAmericas} />
          Go home
        </BlockButton>
      </Container>
    </Layout>
  );
}
