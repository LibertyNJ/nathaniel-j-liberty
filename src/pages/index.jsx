import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { faRocket, faSatellite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, SEO, StarCanvas } from '../components';

const BlockButton = styled(Button)`
  display: inline-block;
  margin-left: 1rem;
  white-space: nowrap;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 33em;
`;
const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
`;
const StyledStarCanvas = styled(StarCanvas)`
  position: absolute;
  z-index: -1;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;
const Subtitle = styled.span`
  font-size: 1.5rem;
  vertical-align: top;
  white-space: nowrap;
  ::before {
    content: '// ';
  }
`;

export default function IndexPage({ ...restProps }) {
  return (
    <Layout mainDisplay="flex" {...restProps}>
      <SEO title="Home" />
      <StyledStarCanvas></StyledStarCanvas>
      <Container>
        <Title>
          Nathaniel&nbsp;J. Liberty <br />
          <Subtitle>Software Developer</Subtitle>
        </Title>
        <Paragraph>
          Driven software developer using JavaScript and web technologies to
          build creative solutions for the healthcare industry and more.
        </Paragraph>
        <ButtonContainer>
          <Link to="/contact">
            <BlockButton type="button">
              <StyledIcon icon={faSatellite} />
              Make contact
            </BlockButton>
          </Link>
          <Link to="/projects">
            <BlockButton type="button">
              <StyledIcon icon={faRocket} />
              Explore my work
            </BlockButton>
          </Link>
        </ButtonContainer>
      </Container>
    </Layout>
  );
}
