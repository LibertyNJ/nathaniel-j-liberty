import { useState } from 'react';

import Brand from './Brand';
import Container from './Container';
import Nav from './Nav';
import Props from './Props';
import ColorSchemeToggle from './ColorSchemeToggle';
import { transition } from '../../../../style';

export default function LayoutHeader(props: Props) {
  const { colorScheme, setColorScheme, windowIsScrolled } = props;
  const [navListIsHiding, setNavListIsHiding] = useState(false);
  const [navListIsShown, setNavListIsShown] = useState(false);
  const navListHidingDuration = +transition.duration.replace('ms', '');
  const handleColorSchemeToggle = () => setColorScheme(inactiveColorScheme);
  const inactiveColorScheme = colorScheme === 'light' ? 'dark' : 'light';
  const colorSchemeToggleLabel = `Enable ${inactiveColorScheme} mode`;

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
      $backgroundIsOpaque={navListIsShown || windowIsScrolled}
      id="page-header"
    >
      <Brand />
      {colorScheme && (
        <ColorSchemeToggle
          colorScheme={colorScheme}
          label={colorSchemeToggleLabel}
          onToggle={handleColorSchemeToggle}
        />
      )}
      <Nav
        listIsHiding={navListIsHiding}
        listIsShown={navListIsShown}
        toggleList={toggleNavList}
      />
    </Container>
  );
}
