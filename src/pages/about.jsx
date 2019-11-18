import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AboutPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="About" />
      <section>
        <h1>About</h1>
        <a href="#">
          <button type="button">Download my resume</button>
        </a>
        <p>
          I’m a software developer with a love of learning new technologies and
          tackling new challenges. My passion is building creative solutions for
          problems in data analysis and analytics, workflow automation, and
          website design. I’m always looking for new opportunities to apply my
          skills.
        </p>
        <p>Your project could be next.</p>
        <Link to="/contact">
          <button type="button">Contact me</button>
        </Link>
        <Link to="/projects">
          <button type="button">See my work</button>
        </Link>
      </section>
      <p>
        <a
          href="https://github.com/LibertyNJ"
          rel="noopener noreferrer"
          target="_blank"
        >
          View my GitHub profile.
        </a>
      </p>
      <p>
        <a
          href="https://linkedin.com/in/nathanieljliberty"
          rel="noopener noreferrer"
          target="_blank"
        >
          View my LinkedIn profile.
        </a>
      </p>
    </Layout>
  );
}
