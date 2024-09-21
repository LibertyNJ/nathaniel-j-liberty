import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import Page from '../components/Page';
import Project from '../components/Project';
import Seo from '../components/Seo';
import Title from '../components/Title';

interface StaticQueryData {
  readonly allContentfulProject: {
    readonly edges: {
      readonly node: {
        readonly description: { readonly raw: string };
        readonly id: string;
        readonly image: {
          readonly description: string;
          readonly gatsbyImageData: IGatsbyImageData;
        };
        readonly links: { readonly text: string; readonly url: string }[];
        readonly subtitle?: string;
        readonly technologies: string[];
        readonly title: string;
      };
    }[];
  };
}

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

  const projects = data.allContentfulProject.edges.map((edge) => (
    <Project
      description={edge.node.description}
      image={{
        alt: edge.node.image.description,
        gatsbyImageData: edge.node.image.gatsbyImageData,
      }}
      key={edge.node.id}
      links={edge.node.links.map((link) => ({
        href: link.url,
        text: link.text,
      }))}
      subtitle={edge.node.subtitle ?? ''}
      technologies={edge.node.technologies}
      title={edge.node.title}
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
