import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function IndexPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Home" />
      <h1>
        Nathaniel J. Liberty <br />
        <span>Software Developer</span>
      </h1>
      <p>
        Driven software developer using JavaScript and web technologies to build
        creative solutions for the healthcare industry and more.
      </p>
      <Link to="/contact">
        <button type="button">Contact me</button>
      </Link>
      <Link to="/projects">
        <button type="button">See my work</button>
      </Link>
    </Layout>
  );
}
