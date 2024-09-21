import { useState } from 'react';

import { transition } from '../../../../style';
import Brand from './Brand';
import Container from './Container';
import Nav from './Nav';
import Props from './Props';

export default function LayoutHeader(props: Props) {
  const [navListIsHiding, setNavListIsHiding] = useState(false);
  const [navListIsShown, setNavListIsShown] = useState(false);
  const navListHidingDuration = +transition.duration.match(/\d*/)[0];

  const hideNavList = () => {
    setNavListIsShown(false);
    setNavListIsHiding(true);
    setTimeout(() => setNavListIsHiding(false), navListHidingDuration);
  };

  const showNavList = () => setNavListIsShown(true);

  const toggleNavList = () => {
    if (navListIsShown) {
      hideNavList();
    } else {
      showNavList();
    }
  };

  return (
    <Container
      backgroundIsOpaque={navListIsShown || props.windowIsScrolled}
      id="page-header"
    >
      <Brand />
      <Nav
        listIsHiding={navListIsHiding}
        listIsShown={navListIsShown}
        toggleList={toggleNavList}
      />
    </Container>
  );
}
