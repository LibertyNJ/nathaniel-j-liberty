import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StarCanvas from '../components/StarCanvas';
import { baseline, breakpoint, color, typography } from '../style';

const BORDER_THICKNESS = '1px';

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
  margin-top: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.sm}) {
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

  @media (min-width: ${breakpoint.sm}) {
    max-width: 540px;
  }

  @media (min-width: ${breakpoint.md}) {
    max-width: 720px;
  }

  @media (min-width: ${breakpoint.lg}) {
    max-width: 960px;
  }

  @media (min-width: ${breakpoint.xl}) {
    max-width: 1140px;
  }
`;

const ContentContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`;

const CtaContainer = styled.div`
  @media (min-width: ${breakpoint.md}) {
    margin: 0 auto calc(6 * ${baseline});
  }
`;

const ExternalLink = styled.a`
  color: ${color.white};
  transition: color 250ms;

  & :hover {
    color: ${color.lightGray};
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoint.md}) {
    column-gap: calc(12 * ${baseline});
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto;
  }
`;

const ListHeading = styled.p`
  font-size: ${typography.fontSize.h5.xs};
  font-weight: bold;
  line-height: ${typography.lineHeight.h5.xs};
  margin-bottom: 0;

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h5.md};
    line-height: ${typography.lineHeight.h5.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h5.lg};
    line-height: ${typography.lineHeight.h5.lg};
  }
`;

const ProfileButton = styled(Button)`
  display: block;
  margin: 0 auto calc(6 * ${baseline}) auto;
  width: 100%;
`;

const ProfileContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  a {
    text-decoration: none;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`;

const StyledImage = styled(Image)`
  border: ${BORDER_THICKNESS} solid ${color.white};
  border-radius: 50%;
  margin-bottom: calc(6 * ${baseline});
  width: 100%;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const TechnologyColumns = styled.div`
  columns: 2;
  margin-bottom: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    columns: 3;
  }
`;

const TechnologyList = styled.div`
  break-inside: avoid;
  margin-bottom: calc(6 * ${baseline});

  ul {
    margin-bottom: 0;
  }
`;

const TextContainer = styled.div`
  margin: 0 auto;
  max-width: 33rem;
`;

const Title = styled.h1`
  font-family: ${typography.font.monospace};
  text-align: center;
`;

export default function AboutPage({ ...restProps }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "nathaniel-j-liberty.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
            <div>
              <ProfileButton
                download
                forwardedAs="a"
                href="../../nathaniel-j-liberty-resume.pdf"
                size="small"
              >
                <StyledIcon icon="file-download" />
                Resume
              </ProfileButton>
              <ProfileButton
                forwardedAs="a"
                href="https://github.com/LibertyNJ"
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                <StyledIcon icon={['fab', 'github']} />
                GitHub
              </ProfileButton>
              <ProfileButton
                forwardedAs="a"
                href="https://linkedin.com/in/nathanieljliberty"
                rel="noopener noreferrer"
                size="small"
                target="_blank"
              >
                <StyledIcon icon={['fab', 'linkedin']} />
                LinkedIn
              </ProfileButton>
            </div>
          </ProfileContainer>
          <ContentContainer>
            <TextContainer>
              <section>
                <h2>Profile</h2>
                <p>
                  As a data analyst with a passion for technology, I discovered
                  programming out of a drive to push myself further. I fell in
                  love with the versatility of JavaScript, using it to create
                  websites, mobile apps, and desktop applications. I now look
                  forward to the daily adventure of exploring the latest web
                  technologies and using them to build new and exciting
                  projects.
                </p>
                <p>I’m also very much inspired by space.</p>
              </section>
              <section>
                <h2>Technologies</h2>
                <TechnologyColumns>
                  <TechnologyList>
                    <ListHeading>Core</ListHeading>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                      <li>SQL</li>
                    </ul>
                  </TechnologyList>
                  <TechnologyList>
                    <ListHeading>Front-end</ListHeading>
                    <ul>
                      <li>Bootstrap</li>
                      <li>React</li>
                      <li>Redux</li>
                      <li>Sass</li>
                      <li>Styled Components</li>
                    </ul>
                  </TechnologyList>
                  <TechnologyList>
                    <ListHeading>Back-end</ListHeading>
                    <ul>
                      <li>Express</li>
                      <li>GraphQL</li>
                      <li>MongoDB</li>
                      <li>Node.js</li>
                      <li>PostgreSQL</li>
                      <li>Sequelize</li>
                      <li>SQLite</li>
                    </ul>
                  </TechnologyList>
                  <TechnologyList>
                    <ListHeading>Testing</ListHeading>
                    <ul>
                      <li>Jest</li>
                    </ul>
                  </TechnologyList>
                  <TechnologyList>
                    <ListHeading>Tools</ListHeading>
                    <ul>
                      <li>Babel</li>
                      <li>Git</li>
                      <li>NPM</li>
                      <li>Webpack</li>
                    </ul>
                  </TechnologyList>
                  <TechnologyList>
                    <ListHeading>Platforms</ListHeading>
                    <ul>
                      <li>Contentful</li>
                      <li>Electron</li>
                      <li>Expo</li>
                      <li>Gatsby</li>
                      <li>Heroku</li>
                      <li>Netlify</li>
                      <li>React Native</li>
                    </ul>
                  </TechnologyList>
                  <TechnologyList>
                    <ListHeading>Other</ListHeading>
                    <ul>
                      <li>Arduino</li>
                    </ul>
                  </TechnologyList>
                </TechnologyColumns>
              </section>
              <section>
                <h2>Certifications</h2>
                <ul>
                  <li>
                    <b>
                      Arduino Fundamentals: Electronics and Physical Computing
                    </b>
                    <br />
                    <span>
                      Certificate ID: 850A10E0-8119-4A76-99DF-7EEACAA30ECE
                    </span>
                    <br />
                    <ExternalLink
                      href="https://create.arduino.cc/edu/courses/local/certification/certinfo.php?id=850a10e0-8119-4a76-99df-7eeacaa30ece"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      See verification
                    </ExternalLink>
                  </li>
                </ul>
              </section>
            </TextContainer>
          </ContentContainer>
        </GridContainer>
        <CtaContainer>
          <h2>Let’s discover new frontiers together</h2>
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
        </CtaContainer>
      </Container>
    </Layout>
  );
}
