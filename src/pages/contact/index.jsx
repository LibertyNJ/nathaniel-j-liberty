import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Lead from '../../components/Lead';
import SEO from '../../components/SEO';
import StarCanvas from '../../components/StarCanvas';

import { baseline, breakpoint, color, typography } from '../../style';

const BORDER_THICKNESS = '1px';
const TRANSITION_DURATION = '500ms';

const BlockButton = styled(Button)`
  display: block;
  margin-bottom: calc(6 * ${baseline});
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 33em;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(6 * ${baseline});

  &:last-of-type {
    margin-bottom: calc(12 * ${baseline});
  }
`;

const Input = styled.input`
  background: ${color.black};
  border: ${BORDER_THICKNESS} solid ${color.white};
  border-radius: ${baseline};
  color: ${color.white};
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  padding: calc(3 * ${baseline} - ${BORDER_THICKNESS});
  transition: filter ${TRANSITION_DURATION};

  :focus {
    filter: drop-shadow(0 0 5px ${color.white});
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.body.md};
    line-height: ${typography.lineHeight.body.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.body.lg};
    line-height: ${typography.lineHeight.body.lg};
  }
`;

const Label = styled.label`
  font-family: ${typography.monospace};
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h5.md};
    line-height: ${typography.lineHeight.h5.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h5.lg};
    line-height: ${typography.lineHeight.h5.lg};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const Title = styled.h1`
  font-family: ${typography.font.monospace};
  text-align: center;
`;

export default function ContactPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Contact" />
      <StyledStarCanvas coveredElementSelector="body" />
      <Container>
        <Title>Contact</Title>
        <Lead>Let’s discover what we can accomplish together.</Lead>
        <form
          action="/contact/success"
          data-netlify="true"
          id="contact-form"
          method="POST"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              form="contact-form"
              name="name"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              form="contact-form"
              name="email"
              type="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Input
              as="textarea"
              id="message"
              form="contact-form"
              name="message"
              required
              rows="5"
              spellcheck
            />
          </FormGroup>
          <BlockButton form="contact-form" size="large" type="submit">
            <StyledIcon icon="satellite-dish" />
            Transmit
          </BlockButton>
        </form>
      </Container>
    </Layout>
  );
}
