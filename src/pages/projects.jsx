import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
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
const Project = styled.section`
  border: 1px solid white;
  border-radius: 0.25rem;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  margin: 0 auto 3rem auto;
  padding: 1rem;
  width: 75%;
`;
const ProjectDetails = styled.div``;
const ProjectStory = styled.div``;
const ProjectHeader = styled.header`
  grid-column: 1 / 3;
`;
const ProjectTitle = styled.h2`
  font-family: 'Fira Mono', monospace;
`;
const ProjectSubtitle = styled.p``;
const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  text-align: center;
`;
const StyledImage = styled.div`
  border: 1px solid white;
  border-radius: 0.25rem;
  height: 200px;
  width: 200px;
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

export default function ProjectsPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Projects" />
      <section>
        <Title>Projects</Title>
        <Project
          githubSlug="/LibertyNJ/c2-auditing-tools"
          name="C2 Auditing Tools"
        >
          <ProjectHeader>
            <ProjectTitle>C2 Auditing Tools</ProjectTitle>
            <ProjectSubtitle>Full stack desktop application</ProjectSubtitle>
          </ProjectHeader>
          <ProjectDetails>
            <StyledImage />
            <div>
              <StyledIcon icon={faGithub} />
              <a
                href="https://github.com/LibertyNJ/c2-auditing-tools"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on GitHub
              </a>
            </div>
            <div>
              <StyledIcon icon={faGlobe} />
              <a href="#" rel="noopener noreferrer" target="_blank">
                Visit live project
              </a>
            </div>
            <div>
              <p>Technologies</p>
              <ul>
                <li>Bootstrap</li>
                <li>Electron</li>
                <li>Jest</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Redux</li>
                <li>Sass</li>
                <li>SQLite</li>
              </ul>
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
                detect controlled substance diversion. The review process took
                two weeks to complete every month.
              </p>
            </section>
            <section>
              <h3>Solution</h3>
              <p>
                A local desktop application deployed to a secure network drive
                to ensure use of protected health information was within company
                policy. Data is parsed from company data analytics reports and
                imported to a SQL database. The application takes user defined
                search parameters and creates a ledger that traces the
                controlled substance chain of custody from withdrawal to
                administration or other disposition.
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
            <ProjectTitle>abigailandnathaniel.com</ProjectTitle>
            <ProjectSubtitle>Wedding website</ProjectSubtitle>
          </ProjectHeader>
          <ProjectDetails>
            <StyledImage />
            <div>
              <StyledIcon icon={faGithub} />
              <a
                href="https://github.com/LibertyNJ/abigail-and-nathaniel"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on GitHub
              </a>
            </div>
            <div>
              <StyledIcon icon={faGlobe} />
              <a
                href="https://www.abigailandnathaniel.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit live project
              </a>
            </div>
            <div>
              <p>Technologies</p>
              <ul>
                <li>Bootstrap</li>
                <li>Gatsby.js</li>
                <li>GraphQL</li>
                <li>Jest</li>
                <li>Netlify</li>
                <li>React</li>
                <li>Sass</li>
              </ul>
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
                The creation of an informational website for an upcoming
                wedding.
              </p>
            </section>
            <section>
              <h3>Solution</h3>
              <p>
                We worked closely together past the initial wireframes to
                implement a graceful degredation of the desktop design for
                tablet and smartphone sized viewports.
              </p>
            </section>
          </ProjectStory>
        </Project>
        <Project githubSlug="/LibertyNJ/vacctrac" name="VaccTrac">
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
              A discussion with a pharmacist revealed the need for a tool
              patients can use to track their vaccination history.
            </p>
          </section>
          <section>
            <h3>Solution</h3>
            <p>
              A proof of concept mobile application to show the feasibility of
              patients tracking vaccination history on their smartphones. The
              application allows patients to enter dates and manage follow-up
              doses for vaccinations they have received or are scheduled to
              receive. A vaccine info screen provides images of common vaccines
              and links to up-to-date information maintained by the Centers for
              Disease Control.
            </p>
          </section>
          <section>
            <h3>Technologies used</h3>
            <ul>
              <li>Expo</li>
              <li>React Native</li>
              <li>Redux</li>
            </ul>
          </section>
        </Project>
        <Project
          githubSlug="/LibertyNJ/study-drug-label-maker"
          name="Study Drug Label Maker"
        >
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
              system. This left the research pharmacy program without a way to
              create labels for study drugs.
            </p>
          </section>
          <section>
            <h3>Solution</h3>
            <p>
              A local desktop application deployed to a shared network drive.
              The application allows users to select from several label types
              suited for different medication products and adjusts form fields
              accordingly. Prescription numbers and dispensed date are generated
              automatically to expedite the workflow.
            </p>
          </section>
          <section>
            <h3>Technologies used</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Electron</li>
              <li>Jest</li>
              <li>React</li>
              <li>Redux</li>
              <li>Sass</li>
            </ul>
          </section>
        </Project>
        <Project
          githubSlug="/LibertyNJ/cytoxan-label-maker"
          name="Cytoxan Label Maker"
        >
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
              A local desktop application deployed to a shared network drive.
              The application was developed as a specialized iteration on the
              earlier Study Drug Label Maker. Medication volumes and expiration
              dates are automatically calculated from user input and formatted
              according to best practices in medication safety.
            </p>
          </section>
          <section>
            <h3>Technologies used</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Electron</li>
              <li>Jest</li>
              <li>React</li>
              <li>Redux</li>
              <li>Sass</li>
            </ul>
          </section>
        </Project>
      </section>
      <Link to="/contact">
        <button type="button"></button>
      </Link>
      <Link to="/about">
        <button type="button">Learn more</button>
      </Link>
    </Layout>
  );
}
