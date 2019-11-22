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

import { Button, Layout, SEO } from '../components';

const BlockButton = styled(Button)`
  display: inline-block;
  margin-left: 1rem;
  white-space: nowrap;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  text-align: center;
`;

export default function AboutPage({ data, ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="About" />
      <section>
        <Title>About</Title>
        <Profile>
          <Frame>
            <Image fluid={data.file.childImageSharp.fluid} />
          </Frame>
          <p>Nathaniel J. Liberty</p>
          <a
            href="https://github.com/LibertyNJ"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BlockButton>
              <StyledIcon icon={faGithub} />
              GitHub
            </BlockButton>
          </a>
          <a
            href="https://linkedin.com/in/nathanieljliberty"
            rel="noopener noreferrer"
            target="_blank"
          >
            <BlockButton>
              <StyledIcon icon={faLinkedin} />
              LinkedIn
            </BlockButton>
          </a>
        </Profile>
        <a href="../../nathaniel-j-liberty-resume.pdf" download>
          <Button type="button">
            <StyledIcon icon={faFileDownload} />
            Resume
          </Button>
        </a>
        <Paragraph>
          I’m a software developer with a love of learning new technologies and
          tackling new challenges. My passion is building creative solutions for
          problems in data analysis and analytics, workflow automation, and
          website design. I’m always looking for new opportunities to apply my
          skills.
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
