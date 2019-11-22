import React from 'react';
import styled from 'styled-components';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, SEO } from '../components';

const BlockButton = styled(Button)`
  display: block;
  margin-left: auto;
  white-space: nowrap;
`;
const Form = styled.form`
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 1rem;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  background: none;
  border: 1px solid white;
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem;
`;
const Label = styled.label`
  font: 1.25rem/1.6 'Fira Mono', monospace;
`;
const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 33em;
`;
const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;
const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  text-align: center;
`;

export default function ContactPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Contact" />
      <section>
        <Title>Contact</Title>
        <Paragraph>
          Let’s work together and build something out of this world!
        </Paragraph>
        <Form action="/" id="contact-form" method="POST" name="contact" netlify>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input id="name" form="contact-form" type="text" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input id="email" form="contact-form" type="email" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Input as="textarea" id="message" form="contact-form" required />
          </FormGroup>
          <BlockButton form="contact-form" type="submit">
            <StyledIcon icon={faSatelliteDish} />
            Transmit
          </BlockButton>
        </Form>
      </section>
    </Layout>
  );
}
