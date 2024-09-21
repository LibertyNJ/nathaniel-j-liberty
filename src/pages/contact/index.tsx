import Button from '../../components/Button';
import Form from '../../components/Form';
import Lead from '../../components/Lead';
import Page from '../../components/Page';
import Seo from '../../components/Seo';
import TextInput from '../../components/TextInput';
import Title from '../../components/Title';

export default function ContactPage() {
  return (
    <Page>
      <Title $centered>Contact</Title>
      <Lead>Let’s discover new frontiers together.</Lead>
      <Form
        action="/contact/success"
        data-netlify="true"
        id="contact-form"
        method="POST"
        name="contact"
      >
        <input name="form-name" type="hidden" value="contact" />
        <TextInput id="name" label="Name" required type="text" />
        <TextInput id="email" label="Email" required type="email" />
        <TextInput
          id="message"
          label="Message"
          required
          rows={5}
          type="textarea"
        />
        <Button icon="satellite-dish" size="large" unlimitedWidth>
          Transmit
        </Button>
      </Form>
    </Page>
  );
}

export function Head() {
  return <Seo title="Contact" />;
}
