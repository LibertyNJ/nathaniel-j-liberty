import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop,
  faDownload,
  faGlobe,
  faSatellite,
  faUserAstronaut,
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

const CtaContainer = styled.div`
  @media (min-width: ${styleVariables.breakpoint.md}px) {
    margin: ${4 * styleVariables.baselinePixels}px auto;
  }
`;

const DesktopImage = styled(Image)`
  border: 1px solid white;
  border-radius: 0.25rem;
  margin-bottom: ${2 * styleVariables.baselinePixels}px;
  width: 100%;
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

const MobileImage = styled(Image)`
  border: 1px solid white;
  border-radius: 0.25rem;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 25%;
`;

const Project = styled.section`
  @media (min-width: ${styleVariables.breakpoint.md}px) {
    display: grid;
    column-gap: ${4 * styleVariables.baselinePixels}px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  }
`;

const ProjectDetails = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const ProjectHeader = styled.header`
  grid-column: 1 / 2;
`;

const ProjectStory = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  max-width: 33rem;
`;

const ProjectSubtitle = styled.span`
  display: block;
  font-size: ${styleVariables.h4.xs.rem}rem;
  line-height: ${styleVariables.h4.xs.lh};

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h4.md.rem}rem;
    line-height: ${styleVariables.h4.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.h4.lg.rem}rem;
    line-height: ${styleVariables.h4.lg.lh};
  }
`;

const ProjectTitle = styled.h2``;

const TechnologyList = styled.ul`
  column-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectDetailsButton = styled(Button)`
  display: block;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 100%;
`;

const ProjectDetailsButtonContainer = styled.div``;

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

export default function ProjectsPage({ data, ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Projects" />
      <StyledStarCanvas coveredElementSelector="body" shroud />
      <section>
        <Title>Projects</Title>
        <Container>
          <Project
            githubSlug="/LibertyNJ/c2-auditing-tools"
            name="C2 Auditing Tools"
          >
            <ProjectHeader>
              <ProjectTitle>
                C2 Auditing Tools <br />
                <ProjectSubtitle>Desktop application</ProjectSubtitle>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('c2-auditing-tools', data)}
              />
              <ProjectDetailsButtonContainer>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/c2-auditing-tools"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faGithub} />
                  View on GitHub
                </ProjectDetailsButton>
              </ProjectDetailsButtonContainer>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Bootstrap</li>
                  <li>Electron</li>
                  <li>Jest</li>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Sass</li>
                  <li>SQLite</li>
                  <li>Node.js</li>
                </TechnologyList>
              </div>
            </ProjectDetails>
            <ProjectStory>
              <section>
                <h3>My role</h3>
                <p>
                  I served as the sole developer and managed all aspects of the
                  project.
                </p>
              </section>
              <section>
                <h3>Problem</h3>
                <p>
                  A hospital was using a time-intensive manual review process to
                  investigate controlled substance diversion. The review process
                  took two weeks to complete every month.
                </p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>
                  A desktop application deployed to a secure network drive to
                  ensure safe use of protected health information. Data is
                  parsed from data analytics reports and imported to a SQL
                  database. The application takes user defined search parameters
                  and creates a ledger that traces the controlled substance
                  chain of custody from withdrawal to administration or other
                  disposition.
                </p>
                <p>
                  The controlled substance auditing process for the hospital is
                  now completed in less than an hour a month.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <Project
            githubSlug="/LibertyNJ/abigail-and-nathaniel"
            liveUrl="https://www.abigailandnathaniel.com/"
            name="abigailandnathaniel.com"
          >
            <ProjectHeader>
              <ProjectTitle>
                Abigail &amp; Nathaniel <br />
                <ProjectSubtitle>Wedding website</ProjectSubtitle>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('abigail-and-nathaniel', data)}
              />
              <ProjectDetailsButtonContainer>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/abigail-and-nathaniel"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faGithub} />
                  View on GitHub
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://www.abigailandnathaniel.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faGlobe} />
                  Visit site
                </ProjectDetailsButton>
              </ProjectDetailsButtonContainer>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Bootstrap</li>
                  <li>Gatsby.js</li>
                  <li>GraphQL</li>
                  <li>Jest</li>
                  <li>Netlify</li>
                  <li>React</li>
                  <li>Sass</li>
                </TechnologyList>
              </div>
            </ProjectDetails>
            <ProjectStory>
              <section>
                <h3>My role</h3>
                <p>
                  I collaborated with a designer who provided wireframes and art
                  assets.
                </p>
              </section>
              <section>
                <h3>Problem</h3>
                <p>
                  The creation of a wedding website. The client desired a
                  countdown, photo galleries, and convenient access to
                  information regarding accommodations, travel arrangements, and
                  other services surrounding the wedding.
                </p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>
                  A single-page scrolling site featuring images of the couple as
                  backdrops. A responsive mobile experience was created via
                  graceful degredation of the designer’s wireframes, which were
                  envisioned for a desktop device.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <Project githubSlug="/LibertyNJ/vacctrac" name="VaccTrac">
            <ProjectHeader>
              <ProjectTitle>
                VaccTrac <br />
                <ProjectSubtitle>Mobile application</ProjectSubtitle>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDetails>
              <MobileImage fluid={getImageFluidFromData('vacctrac', data)} />
              <ProjectDetailsButtonContainer>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/vacctrac"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faGithub} />
                  View on GitHub
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40libertynj/vacctrac-poc-4be840ba42244fc592a9f88f90745734-signed.apk"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faDownload} />
                  Download for Android
                </ProjectDetailsButton>
              </ProjectDetailsButtonContainer>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Expo</li>
                  <li>React Native</li>
                  <li>Redux</li>
                </TechnologyList>
              </div>
            </ProjectDetails>
            <ProjectStory>
              <section>
                <h3>My role</h3>
                <p>
                  I served as the sole developer and managed all aspects of the
                  project.
                </p>
              </section>
              <section>
                <h3>Problem</h3>
                <p>
                  A discussion with a clinical pharmacist revealed the need for
                  a tool patients can use to track their vaccination history.
                </p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>
                  A proof-of-concept mobile application to show the feasibility
                  of patients tracking vaccination history on their smartphones.
                  The application allows patients to enter dates and manage
                  follow-up doses for vaccinations they have received or are
                  scheduled to receive. A vaccine info screen provides images of
                  common vaccines and links to up-to-date information maintained
                  by the Centers for Disease Control.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <Project
            githubSlug="/LibertyNJ/study-drug-label-maker"
            name="Study Drug Label Maker"
          >
            <ProjectHeader>
              <ProjectTitle>
                Study Drug Label Maker <br />
                <ProjectSubtitle>Desktop application</ProjectSubtitle>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('study-drug-label-maker', data)}
              />
              <ProjectDetailsButtonContainer>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/study-drug-label-maker"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faGithub} />
                  View on GitHub
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://nathanieljliberty-sdlm.netlify.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faDesktop} />
                  Try it
                </ProjectDetailsButton>
              </ProjectDetailsButtonContainer>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Bootstrap</li>
                  <li>Electron</li>
                  <li>Jest</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Sass</li>
                </TechnologyList>
              </div>
            </ProjectDetails>
            <ProjectStory>
              <section>
                <h3>My role</h3>
                <p>
                  I served as the sole developer and managed all aspects of the
                  project.
                </p>
              </section>
              <section>
                <h3>Problem</h3>
                <p>
                  An application that a hospital pharmacy depended on to make
                  outpatient medication labels was being sunset by the health
                  system. This left the research pharmacy program without a way
                  to create labels for study drugs.
                </p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>
                  A desktop application that allows users to create a variety of
                  label types suited for different medication products.
                  Prescription numbers and dispensed date are generated
                  automatically to expedite the workflow.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <Project
            githubSlug="/LibertyNJ/cytoxan-label-maker"
            name="Cytoxan Label Maker"
          >
            <ProjectHeader>
              <ProjectTitle>
                Cytoxan Label Maker <br />
                <ProjectSubtitle>Desktop application</ProjectSubtitle>
              </ProjectTitle>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('cytoxan-label-maker', data)}
              />
              <ProjectDetailsButtonContainer>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/cytoxan-label-maker"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faGithub} />
                  View on GitHub
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://nathanieljliberty-clm.netlify.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={faDesktop} />
                  Try it
                </ProjectDetailsButton>
              </ProjectDetailsButtonContainer>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Bootstrap</li>
                  <li>Electron</li>
                  <li>Jest</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Sass</li>
                </TechnologyList>
              </div>
            </ProjectDetails>
            <ProjectStory>
              <section>
                <h3>My role</h3>
                <p>
                  I served as the sole developer and managed all aspects of the
                  project.
                </p>
              </section>
              <section>
                <h3>Problem</h3>
                <p>
                  An application that a hospital pharmacy depended on to make
                  outpatient medication labels was being sunset by the health
                  system. This left the oncology pharmacy team without a way to
                  create labels for chemotherapy medications used by off-site
                  clinics.
                </p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>
                  A desktop application developed as a specialized iteration on
                  the earlier Study Drug Label Maker. Medication volumes and
                  expiration dates are automatically calculated from user input
                  and formatted according to best practices in medication
                  safety.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <CtaContainer>
            <Lead>Your project is next.</Lead>
            <ButtonContainer>
              <BlockButton forwardedAs={Link} size="large" to="/contact">
                <StyledIcon icon={faSatellite} />
                Make contact
              </BlockButton>
              <BlockButton forwardedAs={Link} size="large" to="/about">
                <StyledIcon icon={faUserAstronaut} />
                Learn about me
              </BlockButton>
            </ButtonContainer>
          </CtaContainer>
        </Container>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`;

function getImageFluidFromData(name, data) {
  const edge = data.allFile.edges.find(edge => edge.node.name === name);
  return edge.node.childImageSharp.fluid;
}
