import Button from '../../components/Button';
import Lead from '../../components/Lead';
import Page from '../../components/Page';
import Title from '../../components/Title';

export default function ContactSuccessPage() {
  return (
    <Page display="flex" title="Contact Success" twinkle>
      <Title centered>Transmission Received</Title>
      <Lead>Thank you! I’ll be in touch.</Lead>
      <Button icon="globe-americas" size="large" to="/">
        Go home
      </Button>
    </Page>
  );
}
