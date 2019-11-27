import React from 'react';
import styled from 'styled-components';
import { faSatelliteDish } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, Layout, Lead, SEO, StarCanvas } from '../../components';
import { variables as styleVariables } from '../../components/GlobalStyle';

const BlockButton = styled(Button)`
  display: block;
  margin: 0 auto ${2 * styleVariables.baselinePixels}px auto;
  width: 100%;

  @media (min-width: ${styleVariables.breakpoint.sm}px) {
    margin: 0 0 0 auto;
    width: auto;
  }
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
  margin-bottom: ${2 * styleVariables.baselinePixels}px;

  &:last-of-type {
    margin-bottom: ${4 * styleVariables.baselinePixels}px;
  }
`;

const Input = styled.input`
  background: black;
  border: 1px solid white;
  border-radius: 0.25rem;
  color: white;
  font-size: ${styleVariables.body.xs.rem}rem;
  line-height: ${styleVariables.body.xs.lh};
  padding: ${styleVariables.baselinePixels - 1}px;
  transition: filter 500ms;

  :focus {
    filter: drop-shadow(0 0 5px white);
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.body.md.rem}rem;
    line-height: ${styleVariables.body.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.body.lg.rem}rem;
    line-height: ${styleVariables.body.lg.lh};
  }
`;

const Label = styled.label`
  font-family: 'Fira Mono', monospace;
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h5.md.rem}rem;
    line-height: ${styleVariables.h5.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.h5.lg.rem}rem;
    line-height: ${styleVariables.h5.lg.lh};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const StyledStarCanvas = styled(StarCanvas)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const Title = styled.h1`
  font-family: 'Fira Mono', monospace;
  text-align: center;
`;

export default function ContactPage({ ...restProps }) {
  return (
    <Layout {...restProps}>
      <SEO title="Contact" />
      <StyledStarCanvas coveredElementSelector="body" />
      <Container>
        <Title>Contact</Title>
        <Lead>Let’s build something out of this world.</Lead>
        <form
          action="/contact/success"
          data-netlify="true"
          id="contact-form"
          method="POST"
          name="contact"
        >
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
          <BlockButton form="contact-form" size="large" type="submit">
            <StyledIcon icon={faSatelliteDish} />
            Transmit
          </BlockButton>
        </form>
      </Container>
    </Layout>
  );
}
