import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/Layout';
import Lead from '../components/Lead';
import SEO from '../components/SEO';
import StarCanvas from '../components/StarCanvas';
import { baseline, breakpoint, typography } from '../style';

const BlockButton = styled(Button)`
  display: block;
  margin: 0 auto calc(6 * ${baseline});
  width: 100%;

  @media (min-width: ${breakpoint.sm}) {
    margin: 0 calc(3 * ${baseline}) calc(6 * ${baseline});

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  @media (min-width: ${breakpoint.sm}) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Container = styled.div`
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const StyledLead = styled(Lead)`
  max-width: 33em;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};

  ::before {
    content: '// ';
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h3.md};
    line-height: ${typography.lineHeight.h3.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h3.lg};
    line-height: ${typography.lineHeight.h3.lg};
  }
`;

const Title = styled.h1`
  font-family: ${typography.font.monospace};
  margin-bottom: calc(6 * ${baseline});
`;

export default function IndexPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex" {...restProps}>
      <SEO title="Home" />
      <StyledStarCanvas coveredElementSelector="body" twinkle />
      <Container>
        <Title>
          Nathaniel&nbsp;J. Liberty <br />
          <Subtitle>Full-Stack Web&nbsp;Developer</Subtitle>
        </Title>
        <StyledLead>
          A stellar full-stack web developer building things that are out of
          this world.
        </StyledLead>
        <ButtonContainer>
          <BlockButton forwardedAs={Link} size="large" to="/contact">
            <StyledIcon icon="satellite" />
            Make contact
          </BlockButton>
          <BlockButton forwardedAs={Link} size="large" to="/projects">
            <StyledIcon icon="rocket" />
            Explore my work
          </BlockButton>
        </ButtonContainer>
      </Container>
    </Layout>
  );
}
