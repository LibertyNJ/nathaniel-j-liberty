import { useEffect, useState } from 'react';

import Container from './Container';
import NavItem from './Item';
import Props from './Props';

export default function LayoutHeaderNavList(props: Props) {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  useEffect(() => getAndSetHeaderHeight(setHeaderHeight), []);

  return (
    <Container
      $isVisiblyOpaque={props.isShown}
      $isVisiblyTransparent={props.isHiding}
      $topOffset={headerHeight}
    >
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </Container>
  );
}

function getAndSetHeaderHeight(
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>
) {
  const element = document.querySelector('#page-header');

  if (element instanceof HTMLElement) {
    setHeaderHeight(element.offsetHeight);
  }
}
