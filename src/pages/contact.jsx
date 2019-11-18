import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ContactPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Contact" />
      <section>
        <h1>Contact</h1>
        <p>Let’s build something great together.</p>
        <form>
          <label htmlFor="">Name</label>
          <label htmlFor="">Email</label>
          <label htmlFor="">Message</label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </Layout>
  );
}
