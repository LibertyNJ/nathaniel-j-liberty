import Button from '../components/Button';
import Page from '../components/Page';
import Lead from '../components/Lead';
import Title from '../components/Title';

export default function NotFoundPage() {
  return (
    <Page display="flex" title="404" twinkle>
      <Title centered>Error 404: Page&nbsp;Not&nbsp;Found</Title>
      <Lead>You have wandered into a black hole.</Lead>
      <p>…You should probably go back.</p>
      <Button icon="globe-americas" size="large" to="/">
        Go home
      </Button>
    </Page>
  );
}
