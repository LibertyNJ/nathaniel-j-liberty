import Button from '../components/Button';
import Grid from '../components/Grid';
import Lead from '../components/Lead';
import Page from '../components/Page';
import Seo from '../components/Seo';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';

export default function IndexPage() {
  return (
    <Page display="flex" twinkle unlimitedWidth>
      <Title>
        Nathaniel&nbsp;J. Liberty <br />
        <Subtitle>Software Engineer</Subtitle>
      </Title>
      <Lead>
        A stellar software engineer building things that are out of this world.
      </Lead>
      <Grid $columns={1}>
        <Button icon="user-astronaut" size="large" to="/about">
          Learn more
        </Button>
        <Button icon="rocket" size="large" to="/projects">
          Explore work
        </Button>
        <Button icon="satellite" size="large" to="/contact">
          Make contact
        </Button>
      </Grid>
    </Page>
  );
}

export function Head() {
  return <Seo title="Home" />;
}
