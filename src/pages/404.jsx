import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, SEO, StarCanvas } from '../components';
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
  max-width: 33em;
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

export default function NotFoundPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex">
      <SEO title="404 Error: Page Not Found" />
      <StyledStarCanvas coveredElementSelector="body" twinkle />
      <Container>
        <h1>404 Error: Page Not Found</h1>
        <p>Oops!</p>
        <p>
          You have requested a resource that does not exist, or worse, have
          wandered into a black hole.
        </p>
        <Link to="/">
          <BlockButton size="large" type="button">
            <StyledIcon icon={faGlobeAmericas} />
            Go home
          </BlockButton>
        </Link>
      </Container>
    </Layout>
  );
}
