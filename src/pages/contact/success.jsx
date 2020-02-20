import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Lead from '../../components/Lead';
import SEO from '../../components/SEO';
import StarCanvas from '../../components/StarCanvas';
import { baseline, breakpoint, typography } from '../../style';

const BlockButton = styled(Button)`
  display: block;
  margin-bottom: calc(6 * ${baseline});
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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

const TextContainer = styled.div`
  max-width: 33rem;
`;

const Title = styled.h1`
  font-family: ${typography.font.monospace};
  margin-bottom: calc(6 * ${baseline});
`;

export default function ContactSuccessPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex" {...restProps}>
      <SEO title="Contact Success" />
      <StyledStarCanvas coveredElementSelector="body" twinkle />
      <Container>
        <Title>Transmission received</Title>
        <TextContainer>
          <Lead>Thank you! I’ll be in touch.</Lead>
        </TextContainer>
        <BlockButton forwardedAs={Link} size="large" to="/">
          <StyledIcon icon="globe-americas" />
          Go home
        </BlockButton>
      </Container>
    </Layout>
  );
}
