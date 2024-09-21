import Button from '../../components/Button';
import Lead from '../../components/Lead';
import Page from '../../components/Page';
import Seo from '../../components/Seo';
import Title from '../../components/Title';

export default function ContactSuccessPage() {
  return (
    <Page display="flex" twinkle>
      <Title $centered>Transmission Received</Title>
      <Lead>Thank you! I’ll be in touch.</Lead>
      <Button icon="globe-americas" size="large" to="/">
        Go home
      </Button>
    </Page>
  );
}

export function Head() {
  return <Seo title="Contact Success" />;
}
