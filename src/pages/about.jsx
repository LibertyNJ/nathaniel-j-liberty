import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faFileDownload,
  faRocket,
  faSatellite,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, SEO, StarCanvas } from '../components';
import { variables as styleVariables } from '../components/GlobalStyle';

const BlockButton = styled(Button)`
  display: block;
  font-size: ${styleVariables.h4.xs.rem}rem;
  line-height: ${styleVariables.h4.xs.lh};
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  white-space: nowrap;
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    margin: 0 0 0 auto;
    width: auto;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h4.md.rem}rem;
    line-height: ${styleVariables.h4.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.h4.lg.rem}rem;
    line-height: ${styleVariables.h4.lg.lh};
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
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    max-width: 540px;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    max-width: 720px;
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    max-width: 960px;
  }

  @media (min-width: ${styleVariables.breakpoint.xl}px) {
    max-width: 1140px;
  }
`;

const Frame = styled.div`
  border: 1px solid white;
  width: 300px;
`;
const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 33em;
`;
const Profile = styled.div``;
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
  text-align: center;
`;

export default function AboutPage({ data, ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="About" />
      <StyledStarCanvas coveredElementSelector="body"></StyledStarCanvas>
      <section>
        <Title>About</Title>
        <Container>
          <Profile>
            <Frame>
              <Image fluid={data.file.childImageSharp.fluid} />
            </Frame>
            <p>Nathaniel J. Liberty</p>
          </Profile>
          <a href="../../nathaniel-j-liberty-resume.pdf" download>
            <Button type="button">
              <StyledIcon icon={faFileDownload} />
              Resume
            </Button>
          </a>
          <Paragraph>
            I’m a software developer with a love of learning new technologies
            and tackling new challenges. My passion is building creative
            solutions for problems in data analysis and analytics, workflow
            automation, and website design. I’m always looking for new
            opportunities to apply my skills.
          </Paragraph>
          <Paragraph>Your project could be next.</Paragraph>
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
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "nathaniel-j-liberty.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
