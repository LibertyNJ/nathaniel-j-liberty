import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Button from '../components/Button';
import ExternalLink from '../components/ExternalLink';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem';
import HeadedList from '../components/HeadedList';
import Page from '../components/Page';
import Title from '../components/Title';
import { baseline, borderThickness, breakpoint, color } from '../style';

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
  border: ${borderThickness} solid ${color.white};
  border-radius: 50%;
  margin-bottom: calc(6 * ${baseline});
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

interface StaticQueryData {
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

export default function AboutPage() {
  const data = useStaticQuery<StaticQueryData>(graphql`
    query {
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

  return (
    <Page breakpoints shroud title="About">
      <Title centered>About</Title>
      <GridContainer>
        <GridItem column="1 / 2" row="1 / 2">
          <StyledImage
            alt={data.image.description}
            image={data.image.gatsbyImageData}
          />
          <Grid columns={1}>
            <Button
              download
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
        <GridItem column="2 / 3" row="1 / 3">
          <TextContainer>
            <section>
              <h2>Profile</h2>
              <p>
                As a data analyst with a passion for technology, I pursued
                programming out of a personal drive to push the boundaries of
                what’s possible. I enjoy using my self-taught talents to create
                applications, websites, and games that delight others and make
                every day easier.
              </p>
              <p>I’m also very much inspired by space.</p>
            </section>
            <section>
              <h2>Technologies</h2>
              <TechnologyColumns>
                <HeadedList heading="C++">
                  <li>Arduino</li>
                  <li>CMake</li>
                  <li>Google Test</li>
                </HeadedList>
                <HeadedList heading="JavaScript / TypeScript">
                  <li>Babel</li>
                  <li>Bootstrap</li>
                  <li>Electron</li>
                  <li>Express</li>
                  <li>Gatsby</li>
                  <li>Jest</li>
                  <li>NodeJS</li>
                  <li>NPM</li>
                  <li>Puppeteer</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Redux</li>
                  <li>Sequelize</li>
                  <li>Styled Components</li>
                  <li>Webpack</li>
                </HeadedList>
                <HeadedList heading="Databases">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>SQLite</li>
                  <li>SQL Server</li>
                </HeadedList>
                <HeadedList heading="Platforms">
                  <li>Contentful</li>
                  <li>Expo</li>
                  <li>Heroku</li>
                  <li>Netlify</li>
                </HeadedList>
                <HeadedList heading="Tools">
                  <li>Git</li>
                </HeadedList>
              </TechnologyColumns>
            </section>
            <section>
              <h2>Certifications</h2>
              <ul>
                <li>
                  <b>
                    Arduino Fundamentals: Electronics and Physical Computing
                  </b>
                  <br />
                  <span>
                    Certificate ID: 850A10E0-8119-4A76-99DF-7EEACAA30ECE
                  </span>
                  <br />
                  <ExternalLink href="https://create.arduino.cc/edu/courses/local/certification/certinfo.php?id=850a10e0-8119-4a76-99df-7eeacaa30ece">
                    See verification
                  </ExternalLink>
                </li>
              </ul>
            </section>
          </TextContainer>
        </GridItem>
      </GridContainer>
    </Page>
  );
}
