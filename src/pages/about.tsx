import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Button from '../components/Button';
import ExternalLink from '../components/ExternalLink';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import HeadedList from '../components/HeadedList';
import Page from '../components/Page';
import Seo from '../components/Seo';
import Title from '../components/Title';
import { baseline, borderThickness, breakpoint, transition } from '../style';

export default function AboutPage() {
  const data = useStaticQuery<StaticQueryData>(graphql`
    query {
      allContentfulCertification(sort: { name: ASC }) {
        edges {
          node {
            id
            identifier
            name
            verificationUrl
          }
        }
      }
      allContentfulTechnologyList(sort: { category: ASC }) {
        edges {
          node {
            id
            category
            technologies
          }
        }
      }
      image: contentfulAsset(title: { eq: "Nathaniel J. Liberty Image" }) {
        gatsbyImageData(layout: CONSTRAINED)
        description
      }
      resume: contentfulAsset(title: { eq: "Nathaniel J. Liberty Resume" }) {
        file {
          url
        }
      }
    }
  `);

  const certifications = data.allContentfulCertification.edges.map(
    ({ node }) => (
      <li key={node.id}>
        <b>{node.name}</b>
        <br />
        <span>{node.identifier}</span>
        <br />
        <ExternalLink href={node.verificationUrl}>
          See verification
        </ExternalLink>
      </li>
    )
  );

  const technologyLists = data.allContentfulTechnologyList.edges.map(
    ({ node }) => {
      const technologies = node.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ));

      return (
        <HeadedList heading={node.category} key={node.id}>
          {technologies}
        </HeadedList>
      );
    }
  );

  return (
    <Page breakpoints shroud>
      <Title $centered>About</Title>
      <GridContainer>
        <GridItem $column="1 / 2" $row="1 / 2">
          <StyledImage
            alt={data.image.description}
            image={data.image.gatsbyImageData}
          />
          <Grid $columns={1}>
            <Button
              href={'https://' + data.resume.file.url}
              icon="file-download"
              size="small"
            >
              Resume
            </Button>
            <Button
              href="https://github.com/LibertyNJ"
              icon={['fab', 'github']}
              size="small"
            >
              GitHub
            </Button>
            <Button
              href="https://linkedin.com/in/nathanieljliberty"
              icon={['fab', 'linkedin']}
              size="small"
            >
              LinkedIn
            </Button>
          </Grid>
        </GridItem>
        <GridItem $column="2 / 3" $row="1 / 3">
          <TextContainer>
            <section>
              <h2>Profile</h2>
              <p>
                As a person with a passion for technology, I pursued programming
                from a drive to push the boundaries of what’s possible in my own
                life. I enjoy sharing my talents with others to create
                applications, websites, and games that delight and make every
                day better.
              </p>
              <p>I’m very much inspired by space exploration and robotics.</p>
            </section>
            <section>
              <h2>Technologies</h2>
              <TechnologyColumns>{technologyLists}</TechnologyColumns>
            </section>
            <section>
              <h2>Certifications</h2>
              <ul>{certifications}</ul>
            </section>
          </TextContainer>
        </GridItem>
      </GridContainer>
    </Page>
  );
}

export function Head() {
  return <Seo title="About" />;
}

interface StaticQueryData {
  readonly allContentfulCertification: {
    readonly edges: readonly {
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly identifier: string;
        readonly verificationUrl: string;
      };
    }[];
  };
  readonly allContentfulTechnologyList: {
    readonly edges: readonly {
      readonly node: {
        readonly id: string;
        readonly category: string;
        readonly technologies: readonly string[];
      };
    }[];
  };
  readonly image: {
    readonly gatsbyImageData: IGatsbyImageData;
    readonly description: string;
  };
  readonly resume: {
    readonly file: {
      readonly url: string;
    };
  };
}

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoint.md}) {
    column-gap: calc(12 * ${baseline});
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto;
  }
`;

const StyledImage = styled(GatsbyImage)`
  border: ${borderThickness} solid var(--color-contrast);
  border-radius: 50%;
  margin-bottom: calc(6 * ${baseline});
  transition: border-color ${transition.duration};
  width: 100%;
`;

const TechnologyColumns = styled.div`
  columns: 2;
  margin-bottom: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    columns: 3;
  }
`;

const TextContainer = styled.div`
  margin: 0 auto;
  max-width: 33rem;
`;
