import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Container from './Container';
import Props from './Props';

export default function LayoutFooterSocialLink(props: Props) {
  return (
    <Container hoverColor={props.hoverColor} href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </Container>
  );
}
