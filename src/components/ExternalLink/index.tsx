import React from 'react';

import Container from './Container';
import Props from './Props';

export default function ExternalLink(props: Props) {
  return (
    <Container
      className={props.className}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </Container>
  );
}
