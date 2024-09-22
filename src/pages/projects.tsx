import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Page from '../components/Page';
import Project from '../components/Project';
import Seo from '../components/Seo';
import Title from '../components/Title';

export default function PastWorkPage() {
  const data = useStaticQuery<StaticQueryData>(graphql`
    query {
      allContentfulProject(sort: { date: DESC }) {
        edges {
          node {
            id
            image {
              description
              gatsbyImageData(layout: CONSTRAINED)
            }
            subtitle
            title
            technologies
            description {
              raw
            }
            links {
              text
              url
            }
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProject.edges.map(({ node }) => (
    <Project
      description={node.description}
      image={{
        alt: node.image.description,
        gatsbyImageData: node.image.gatsbyImageData,
      }}
      key={node.id}
      links={node.links.map((link) => ({
        href: link.url,
        text: link.text,
      }))}
      subtitle={node.subtitle ?? ''}
      technologies={node.technologies}
      title={node.title}
    />
  ));

  return (
    <Page breakpoints shroud>
      <Title $centered>Projects</Title>
      <section>{projects}</section>
    </Page>
  );
}

export function Head() {
  return <Seo title="Projects" />;
}

interface StaticQueryData {
  readonly allContentfulProject: {
    readonly edges: readonly {
      readonly node: {
        readonly description: { readonly raw: string };
        readonly id: string;
        readonly image: {
          readonly description: string;
          readonly gatsbyImageData: IGatsbyImageData;
        };
        readonly links: readonly {
          readonly text: string;
          readonly url: string;
        }[];
        readonly subtitle?: string;
        readonly technologies: readonly string[];
        readonly title: string;
      };
    }[];
  };
}
