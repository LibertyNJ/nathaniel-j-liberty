import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/Layout';
import Lead from '../components/Lead';
import SEO from '../components/SEO';
import StarCanvas from '../components/StarCanvas';
import { baseline, typography } from '../style';

const BlockButton = styled(Button)`
  display: block;
  margin: 0 auto calc(6 * ${baseline}) auto;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 33rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const Title = styled.h1`
  font-family: ${typography.font.monospace};
  margin-bottom: calc(6 * ${baseline});
`;

export default function NotFoundPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex" {...restProps}>
      <SEO title="404" />
      <StyledStarCanvas coveredElementSelector="body" twinkle />
      <Container>
        <Title>404 Error: Page&nbsp;Not&nbsp;Found</Title>
        <Lead>Oops!</Lead>
        <p>You appear to have wandered into a black hole.</p>
        <p>…You should probably go back.</p>
        <BlockButton forwardedAs={Link} size="large" to="/">
          <StyledIcon icon="globe-americas" />
          Go home
        </BlockButton>
      </Container>
    </Layout>
  );
}
