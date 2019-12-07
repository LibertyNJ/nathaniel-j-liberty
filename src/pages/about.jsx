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

import { Button, Layout, Lead, SEO, StarCanvas } from '../components';
import { variables as styleVariables } from '../components/GlobalStyle';

const BlockButton = styled(Button)`
  display: block;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    margin: 0 ${2 * styleVariables.baselinePixels}px
      ${2 * styleVariables.baselinePixels}px 0;
    width: auto;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    display: flex;
    justify-content: flex-start;
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

const ContentContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`;

const CtaContainer = styled.div`
  @media (min-width: ${styleVariables.breakpoint.md}px) {
    margin: ${4 * styleVariables.baselinePixels}px auto;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    column-gap: ${4 * styleVariables.baselinePixels}px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto;
  }
`;

const ListHeading = styled.p`
  font-size: ${styleVariables.h5.rem}rem;
  font-weight: bold;
  line-height: ${styleVariables.h5.lh};
  margin-bottom: 0;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h5.md.rem}rem;
    line-height: ${styleVariables.h5.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.h5.lg.rem}rem;
    line-height: ${styleVariables.h5.lg.lh};
  }
`;

const ProfileButton = styled(Button)`
  display: block;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 100%;
`;

const ProfileButtonContainer = styled.div``;

const ProfileContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  a {
    text-decoration: none;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const StyledImage = styled(Image)`
  border: 1px solid white;
  border-radius: 50%;
  margin-bottom: ${2 * styleVariables.baselinePixels}px;
  width: 100%;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const TechnologiesSection = styled.section`
  column-gap: ${2 * styleVariables.baselinePixels}px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    grid-column: span 2;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    grid-template-columns: repeat(3, 1fr);

    h2 {
      grid-column: span 3;
    }
  }
`;

const TextContainer = styled.div`
  max-width: 33rem;
`;

const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  text-align: center;
`;

export default function AboutPage({ data, ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="About" />
      <StyledStarCanvas coveredElementSelector="body" shroud />
      <Title>About</Title>
      <Container>
        <GridContainer>
          <ProfileContainer>
            <StyledImage
              alt="Nathaniel J. Liberty in the hall of rockets at the National Air and Space Museum in Washington, DC."
              fluid={data.file.childImageSharp.fluid}
            />
            <ProfileButtonContainer>
              <ProfileButton
                download
                forwardedAs="a"
                href="../../nathaniel-j-liberty-resume.pdf"
                size="small"
              >
                <StyledIcon icon={faFileDownload} />
                Resume
              </ProfileButton>
              <ProfileButton
                forwardedAs="a"
                href="https://github.com/LibertyNJ"
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                <StyledIcon icon={faGithub} />
                GitHub
              </ProfileButton>
              <ProfileButton
                forwardedAs="a"
                href="https://linkedin.com/in/nathanieljliberty"
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                <StyledIcon icon={faLinkedin} />
                LinkedIn
              </ProfileButton>
            </ProfileButtonContainer>
          </ProfileContainer>
          <ContentContainer>
            <TextContainer>
              <section>
                <h2>About me</h2>
                <p>
                  I’m a software developer passionate about learning novel
                  technologies and tackling unfamiliar challenges. I build
                  creative solutions for problems in data analysis and
                  analytics, workflow automation, and website design. I believe
                  that continuous learning and growth is the key to a life of
                  fulfillment, and as such I’m always looking for new
                  opportunities to expand and apply my skills.
                </p>
              </section>
              <TechnologiesSection>
                <h2>Technologies</h2>
                <div>
                  <ListHeading>Core</ListHeading>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <ListHeading>Front-end</ListHeading>
                  <ul>
                    <li>Bootstrap</li>
                    <li>GraphQL</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Sass</li>
                    <li>Styled Components</li>
                  </ul>
                </div>
                <div>
                  <ListHeading>Back-end</ListHeading>
                  <ul>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div>
                  <ListHeading>Testing</ListHeading>
                  <ul>
                    <li>Jest</li>
                  </ul>
                </div>
                <div>
                  <ListHeading>Tools</ListHeading>
                  <ul>
                    <li>Babel</li>
                    <li>Webpack</li>
                  </ul>
                </div>
                <div>
                  <ListHeading>Platforms</ListHeading>
                  <ul>
                    <li>Electron</li>
                    <li>Expo</li>
                    <li>Gatsby</li>
                    <li>Netlify</li>
                    <li>React Native</li>
                  </ul>
                </div>
              </TechnologiesSection>
            </TextContainer>
          </ContentContainer>
        </GridContainer>
        <CtaContainer>
          <Lead>Let’s discover how we can help each other grow.</Lead>
          <ButtonContainer>
            <BlockButton forwardedAs={Link} size="large" to="/contact">
              <StyledIcon icon={faSatellite} />
              Make contact
            </BlockButton>
            <BlockButton forwardedAs={Link} size="large" to="/projects">
              <StyledIcon icon={faRocket} />
              Explore my work
            </BlockButton>
          </ButtonContainer>
        </CtaContainer>
      </Container>
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
