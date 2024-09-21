import { useEffect, useState } from 'react';

import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Props from './Props';

export default function PageLayout(props: Props) {
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);
  useEffect(() => listenForWindowScroll(setWindowIsScrolled), []);

  return (
    <Container>
      <Header windowIsScrolled={windowIsScrolled} />
      <Main
        display={props.mainDisplay}
        unlimitedWidth={props.unlimitedWidth}
        breakpoints={props.breakpoints}
      >
        {props.children}
      </Main>
      <Footer windowIsScrolled={windowIsScrolled} />
    </Container>
  );
}

function listenForWindowScroll(
  setWindowIsScrolled: React.Dispatch<React.SetStateAction<boolean>>
) {
  const handleWindowScroll = () => setWindowIsScrolled(window.scrollY > 0);
  window.addEventListener('scroll', handleWindowScroll);
  return () => window.removeEventListener('scroll', handleWindowScroll);
}
