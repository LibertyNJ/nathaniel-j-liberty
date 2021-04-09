import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Props from './Props';
import StaticQueryResult from './StaticQueryResult';

export default function SEO(props: Props) {
  const { site } = useStaticQuery<StaticQueryResult>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = props.description ?? site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang ?? 'en',
      }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(props.meta ?? [])}
    />
  );
}
