import React from 'react';

import Container from './Container';
import Props from './Props';
import Subtitle from './Subtitle';

export default function ProjectHeader(props: Props) {
  return (
    <Container>
      <h2>
        {props.title} <br />
        <Subtitle>{props.subtitle}</Subtitle>
      </h2>
    </Container>
  );
}
