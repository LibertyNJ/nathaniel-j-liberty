import { Link } from 'gatsby';
import React from 'react';

import { Button, Layout, SEO } from '../components';

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
        <Button type="button">Go to homepage</Button>
      </Link>
    </Layout>
  );
}
