import React from 'react';

import Container from './Container';
import Link from './Link';
import Props from './Props';

export default function NavBarListItem(props: Props) {
  return (
    <Container>
      <Link activeClassName="active" to={props.to}>
        {props.children}
      </Link>
    </Container>
  );
}
