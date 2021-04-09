import React from 'react';

import Button from '../components/Button';
import Grid from '../components/Grid';
import Lead from '../components/Lead';
import Page from '../components/Page';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';

export default function IndexPage() {
  return (
    <Page display="flex" title="Home" twinkle unlimitedWidth>
      <Title>
        Nathaniel&nbsp;J. Liberty <br />
        <Subtitle>Software Engineer</Subtitle>
      </Title>
      <Lead>
        A stellar software engineer building things that are out of this world.
      </Lead>
      <Grid columns={2}>
        <Button icon="satellite" size="large" to="/contact">
          Make contact
        </Button>
        <Button icon="rocket" size="large" to="/past-work">
          Explore work
        </Button>
      </Grid>
    </Page>
  );
}
