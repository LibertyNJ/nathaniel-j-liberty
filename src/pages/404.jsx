import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NotFoundPage({ ...restProps }) {
  return (
    <Layout>
      <SEO title="404 Error: Page Not Found" />
      <h1>404 Error: Page Not Found</h1>
      <p>Oops!</p>
      <p>
        You have requested a resource that does not exist, or worse, I have sent
        you to a place that does not exist.
      </p>
      <p>
        <em>How embarrassing…</em>
      </p>
      <Link to="/">
        <button type="button">Go to homepage</button>
      </Link>
    </Layout>
  );
}
