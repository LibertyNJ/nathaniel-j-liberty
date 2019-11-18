import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Project from '../components/Project';
import SEO from '../components/SEO';

export default function ProjectsPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Projects" />
      <section>
        <h1>Projects</h1>
        <Project
          githubSlug="/LibertyNJ/c2-auditing-tools"
          name="C2 Auditing Tools"
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
              A hospital was using a time-intensive manual review process to
              detect controlled substance diversion. The review process took two
              weeks to complete every month.
            </p>
          </section>
          <section>
            <h3>Solution</h3>
            <p>
              A local desktop application deployed to a secure network drive to
              ensure use of protected health information was within company
              policy. Data is parsed from company data analytics reports and
              imported to a SQL database. The application takes user defined
              search parameters and creates a ledger that traces the controlled
              substance chain of custody from withdrawal to administration or
              other disposition.
            </p>
            <p>
              The controlled substance auditing process for the hospital is now
              completed in less than an hour a month.
            </p>
          </section>
          <section>
            <h3>Technologies used</h3>
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
          </section>
          <section>
            <h3>Notable features</h3>
            <ul>
              <li>Generates ledgers dynamically at time of request.</li>
              <li>Tables are virtualized to render large amounts of data.</li>
            </ul>
          </section>
        </Project>
        <Project
          githubSlug="/LibertyNJ/abigail-and-nathaniel"
          liveUrl="https://www.abigailandnathaniel.com/"
          name="abigailandnathaniel.com"
        >
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
              The creation of an informational website for an upcoming wedding.
            </p>
          </section>
          <section>
            <h3>Solution</h3>
            <p>
              We worked closely together past the initial wireframes to
              implement a graceful degredation of the desktop design for tablet
              and smartphone sized viewports.
            </p>
          </section>
          <section>
            <h3>Technologies used</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Gatsby.js</li>
              <li>GraphQL</li>
              <li>Jest</li>
              <li>Netlify</li>
              <li>React</li>
              <li>Sass</li>
            </ul>
          </section>
          <section>
            <h3>Notable features</h3>
            <ul>
              <li>Embedded Google Map of the wedding area.</li>
              <li>Gallery of engagement photos.</li>
              <li>Responsive, mobile-friendly design.</li>
            </ul>
          </section>
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
          <section>
            <h3>Notable features</h3>
            <ul>
              <li>
                Displays a list of vaccinations scheduled in the next thirty
                days.
              </li>
              <li>Persistent local application state.</li>
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
          <section>
            <h3>Notable features</h3>
            <ul>
              <li>Live preview of labels during data entry.</li>
              <li>Toggles to override automatically generated values.</li>
              <li>
                Toggle to adjust print margins for different generations of
                label printers.
              </li>
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
          <section>
            <h3>Notable features</h3>
            <ul>
              <li>Live preview of labels during data entry.</li>
              <li>
                Toggles to override automatic calculations and default values.
              </li>
            </ul>
          </section>
        </Project>
      </section>
      <Link to="/contact">
        <button type="button">Contact me</button>
      </Link>
      <Link to="/about">
        <button type="button">Learn more</button>
      </Link>
    </Layout>
  );
}
