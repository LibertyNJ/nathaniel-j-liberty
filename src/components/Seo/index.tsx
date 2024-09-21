import { graphql, useStaticQuery } from 'gatsby';

import Props from './Props';
import StaticQueryResult from './StaticQueryResult';

export default function Seo(props: Props) {
  const { site } = useStaticQuery<StaticQueryResult>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = props.description ?? site.siteMetadata.description;

  return (
    <>
      <html lang={props.lang ?? 'en'} />
      <title>
        {props.title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:title" content={props.title} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:title" content={props.title} />
    </>
  );
}
