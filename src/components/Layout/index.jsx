import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CopyrightWidget, GlobalStyle } from '..';
import { NavBar } from '../NavBar'; // Issue with styling a component imported from an index
import { variables as styleVariables } from '../GlobalStyle';

const Brand = styled.div`
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};
  padding: ${styleVariables.baselinePixels}px 0;
  white-space: nowrap;
  flex: initial;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;
`;

const Footer = styled.footer`
  background: ${props => (props.isWindowScrolled ? 'black' : 'none')};
  display: flex;
  flex: initial;
  font-size: ${styleVariables.small.xs.rem}rem;
  justify-content: space-around;
  line-height: ${styleVariables.small.xs.lh};
  margin-top: auto;
  padding: ${styleVariables.baselinePixels}px
    ${2 * styleVariables.baselinePixels}px;
  transition: background 1000ms;
`;

const Header = styled.header`
  background: ${props => (props.isWindowScrolled ? 'black' : 'none')};
  display: flex;
  flex: initial;
  justify-content: space-between;
  padding: 0 ${2 * styleVariables.baselinePixels}px;
  position: sticky;
  top: 0;
  transition: background 1000ms;
  z-index: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Main = styled.main`
  display: ${props => props.mainDisplay || 'block'};
  flex: auto;
  padding: 0 ${2 * styleVariables.baselinePixels}px;
`;

const StyledNavBar = styled(NavBar)`
  flex: initial;
`;

const Tagline = styled.span`
  display: block;
  font-size: ${styleVariables.small.xs.rem}rem;
  line-height: ${styleVariables.small.xs.lh};
  
  ::before {
    content: '// ';
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainDisplay: PropTypes.string,
};

export function Layout({ children, mainDisplay, ...restProps }) {
  const [isWindowScrolled, setIsWindowScrolled] = useState(false);
  useEffect(() => listenForWindowScroll(setIsWindowScrolled), []);
  return (
    <>
      <GlobalStyle />
      <LayoutContainer {...restProps}>
        <Header isWindowScrolled={isWindowScrolled}>
          <Link to="/">
            <Brand>
              Nathaniel J. Liberty <br />
              <Tagline>Software Developer</Tagline>
            </Brand>
          </Link>
          <StyledNavBar />
        </Header>
        <Main mainDisplay={mainDisplay}>{children}</Main>
        <Footer isWindowScrolled={isWindowScrolled}>
          <CopyrightWidget holder="Nathaniel J. Liberty" initialYear={2019} />
        </Footer>
      </LayoutContainer>
    </>
  );
}

function listenForWindowScroll(setIsWindowScrolled) {
  window.addEventListener('scroll', () =>
    handleWindowScroll(setIsWindowScrolled)
  );
  return stopListeningForWindowScroll;
}

function handleWindowScroll(setIsWindowScrolled) {
  window.scrollY > 0 ? setIsWindowScrolled(true) : setIsWindowScrolled(false);
}

function stopListeningForWindowScroll() {
  window.removeEventListener('scroll', listenForWindowScroll);
}
