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
    margin: 0 calc(6 * ${baseline}) calc(6 * ${baseline}) 0;
    width: auto;

    &:last-of-type {
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

const CtaContainer = styled.section`
  @media (min-width: ${breakpoint.md}) {
    margin: 0 auto calc(6 * ${baseline});
  }
`;

const DesktopImage = styled(Image)`
  border: ${BORDER_THICKNESS} solid ${color.white};
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
  width: 100%;
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

const MobileImage = styled(Image)`
  border: 1px solid white;
  border-radius: 0.25rem;
  margin: calc(6 * ${baseline}) auto;
  width: 25%;
`;

const Project = styled.section`
  @media (min-width: ${breakpoint.md}) {
    column-gap: calc(12 * ${baseline});
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    margin-bottom: calc(6 * ${baseline});
  }
`;

const ProjectDetails = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const ProjectHeader = styled.header`
  grid-column: 1 / 3;
`;

const ProjectStory = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  max-width: 33rem;
`;

const ProjectSubtitle = styled.span`
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h4.md};
    line-height: ${typography.lineHeight.h4.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h4.lg};
    line-height: ${typography.lineHeight.h4.lg};
  }
`;

const TechnologyList = styled.ul`
  columns: 2;

  @media (min-width: ${breakpoint.sm}) {
    columns: 3;
  }

  @media (min-width: ${breakpoint.md}) {
    columns: 2;
  }

  @media (min-width: ${breakpoint.lg}) {
    columns: 3;
  }
`;

const ProjectDetailsButton = styled(Button)`
  display: block;
  margin: 0 auto calc(6 * ${baseline}) auto;
  width: 100%;
`;

const DesktopProjectDetailsButton = styled(ProjectDetailsButton)`
  display: none;

  @media (min-width: ${breakpoint.lg}) {
    display: block;
  }
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
  text-align: center;
`;

export default function ProjectsPage({ ...restProps }) {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <Layout {...restProps}>
      <SEO title="Projects" />
      <StyledStarCanvas coveredElementSelector="body" shroud />
      <section>
        <Title>Projects</Title>
        <Container>
          <Project>
            <ProjectHeader>
              <h2>
                C2 Auditing Tools <br />
                <ProjectSubtitle>Data analysis application</ProjectSubtitle>
              </h2>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('c2-auditing-tools', data)}
              />
              <div>
                <DesktopProjectDetailsButton
                  forwardedAs="a"
                  href="https://c2-auditing-tools-web.herokuapp.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon="desktop" />
                  Try it
                </DesktopProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/c2-auditing-tools"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View desktop code
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/c2-auditing-tools-web"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View web code
                </ProjectDetailsButton>
              </div>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Bootstrap</li>
                  <li>Electron</li>
                  <li>Express</li>
                  <li>Heroku</li>
                  <li>Jest</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Sass</li>
                  <li>Sequelize</li>
                  <li>SQLite</li>
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
                  now completed in less than an hour each month.
                </p>
                <section>
                  <h4>Web client</h4>
                  <p>
                    A web client using a REST API and sample database was later
                    created for demonstration purposes.
                  </p>
                </section>
              </section>
            </ProjectStory>
          </Project>
          <Project>
            <ProjectHeader>
              <h2>
                Community Church of&nbsp;Syosset <br />
                <ProjectSubtitle>Church website</ProjectSubtitle>
              </h2>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData(
                  'community-church-of-syosset',
                  data
                )}
              />
              <div>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://uccsyosset.netlify.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon="globe" />
                  Visit site
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/community-church-of-syosset"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View code
                </ProjectDetailsButton>
              </div>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Contentful</li>
                  <li>Gatsby</li>
                  <li>Google Maps API</li>
                  <li>GraphQL</li>
                  <li>Netlify</li>
                  <li>React</li>
                  <li>Styled components</li>
                  <li>TypeScript</li>
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
                  A church needed a modern, easy-to-use replacement for their
                  aging website, with an emphasis on encouraging first-time
                  contact and in-person visitation.
                </p>
              </section>
              <section>
                <h3>Solution</h3>
                <p>
                  A new, mobile-first, responsive design using Contentful as a
                  content management system. Call to action buttons push users
                  towards visitation and contact. Template-driven pages for
                  events, sermons, and image galleries with dynamic pagination
                  keep the site easy to maintain for the organization.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <Project>
            <ProjectHeader>
              <h2>
                Study Drug Label&nbsp;Maker <br />
                <ProjectSubtitle>Productivity application</ProjectSubtitle>
              </h2>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('study-drug-label-maker', data)}
              />
              <div>
                <DesktopProjectDetailsButton
                  forwardedAs="a"
                  href="https://nathanieljliberty-sdlm.netlify.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon="desktop" />
                  Try it
                </DesktopProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/study-drug-label-maker"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View desktop code
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/study-drug-label-maker-web"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View web code
                </ProjectDetailsButton>
              </div>
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
                <section>
                  <h4>Web client</h4>
                  <p>
                    A web client using was later created for remote use and
                    demonstration purposes.
                  </p>
                </section>
              </section>
            </ProjectStory>
          </Project>
          <Project>
            <ProjectHeader>
              <h2>
                Abigail &amp; Nathaniel <br />
                <ProjectSubtitle>Wedding website</ProjectSubtitle>
              </h2>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('abigail-and-nathaniel', data)}
              />
              <div>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://www.abigailandnathaniel.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon="globe" />
                  Visit site
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/abigail-and-nathaniel"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View code
                </ProjectDetailsButton>
              </div>
              <div>
                <ListHeading>Technologies</ListHeading>
                <TechnologyList>
                  <li>Bootstrap</li>
                  <li>Gatsby</li>
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
                  A single-page scrolling site featuring full-screen background
                  images. A responsive mobile experience was created via
                  graceful degredation of the designer’s wireframes, which were
                  envisioned for a desktop device.
                </p>
              </section>
            </ProjectStory>
          </Project>
          <Project>
            <ProjectHeader>
              <h2>
                VaccTrac <br />
                <ProjectSubtitle>Mobile application</ProjectSubtitle>
              </h2>
            </ProjectHeader>
            <ProjectDetails>
              <MobileImage fluid={getImageFluidFromData('vacctrac', data)} />
              <div>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40libertynj/vacctrac-poc-4be840ba42244fc592a9f88f90745734-signed.apk"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon="download" />
                  Download for Android
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/vacctrac-poc"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View code
                </ProjectDetailsButton>
              </div>
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
          <Project>
            <ProjectHeader>
              <h2>
                Cytoxan Label&nbsp;Maker <br />
                <ProjectSubtitle>Productivity application</ProjectSubtitle>
              </h2>
            </ProjectHeader>
            <ProjectDetails>
              <DesktopImage
                fluid={getImageFluidFromData('cytoxan-label-maker', data)}
              />
              <div>
                <DesktopProjectDetailsButton
                  forwardedAs="a"
                  href="https://nathanieljliberty-clm.netlify.com/"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon="desktop" />
                  Try it
                </DesktopProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/cytoxan-label-maker"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View desktop code
                </ProjectDetailsButton>
                <ProjectDetailsButton
                  forwardedAs="a"
                  href="https://github.com/LibertyNJ/cytoxan-label-maker-web"
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <StyledIcon icon={['fab', 'github']} />
                  View web code
                </ProjectDetailsButton>
              </div>
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
                <section>
                  <h4>Web client</h4>
                  <p>
                    A web client using was later created for remote use and
                    demonstration purposes.
                  </p>
                </section>
              </section>
            </ProjectStory>
          </Project>
          <CtaContainer>
            <h2>Your project is next</h2>
            <ButtonContainer>
              <BlockButton forwardedAs={Link} size="large" to="/contact">
                <StyledIcon icon="satellite" />
                Make contact
              </BlockButton>
              <BlockButton forwardedAs={Link} size="large" to="/about">
                <StyledIcon icon="user-astronaut" />
                Learn about me
              </BlockButton>
            </ButtonContainer>
          </CtaContainer>
        </Container>
      </section>
    </Layout>
  );
}

function getImageFluidFromData(name, data) {
  const edge = data.allFile.edges.find(edge => edge.node.name === name);
  return edge.node.childImageSharp.fluid;
}
