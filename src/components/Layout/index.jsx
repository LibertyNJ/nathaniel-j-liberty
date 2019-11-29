import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CopyrightWidget, GlobalStyle } from '..';
import { NavBar } from '../NavBar'; // Issue with styling a component imported from an index
import { variables as styleVariables } from '../GlobalStyle';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

fontAwesomeConfig.autoAddCss = false;

const Footer = styled.footer`
  background: ${props => (props.isWindowScrolled ? 'black' : 'none')};
  flex: initial;
  font-size: ${styleVariables.small.xs.rem}rem;
  justify-content: space-around;
  line-height: ${styleVariables.small.xs.lh};
  margin-top: auto;
  padding: ${styleVariables.baselinePixels}px
    ${2 * styleVariables.baselinePixels}px;
  transition: background 500ms;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;
`;

const Main = styled.main`
  display: ${props => props.mainDisplay || 'block'};
  flex: auto;
  padding: 0 ${2 * styleVariables.baselinePixels}px;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: ${styleVariables.baselinePixels}px;
  justify-content: center;

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    margin-bottom: 0;
  }
`;

const SocialLink = styled.a`
  color: white;
  display: block;
  font-size: ${styleVariables.h4.xs.rem}rem;
  line-height: ${styleVariables.h4.xs.lh};
  margin: 0 ${2 * styleVariables.baselinePixels}px;
  transition: color 500ms, filter 500ms;

  :focus {
    filter: drop-shadow(0 0 10px white);
  }

  :hover {
    color: ${props => props.hoverColor || 'white'};
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    margin: 0 ${styleVariables.baselinePixels}px 0;
  }
`;

const StyledNavBar = styled(NavBar)`
  background: ${props => props.isWindowScrolled && 'black'};
  flex: initial;
  padding: 0 ${2 * styleVariables.baselinePixels}px;
  position: sticky;
  top: 0;
  transition: background 500ms;
  z-index: 1;
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
        <StyledNavBar isWindowScrolled={isWindowScrolled} />
        <Main mainDisplay={mainDisplay}>{children}</Main>
        <Footer isWindowScrolled={isWindowScrolled}>
          <SocialLinks>
            <SocialLink
              hoverColor="#333"
              href="https://github.com/LibertyNJ"
              rel="noopener noreferrer"
              size="small"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink
              hoverColor="#2867b2"
              href="https://linkedin.com/in/nathanieljliberty"
              rel="noopener noreferrer"
              size="small"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
          </SocialLinks>
          <CopyrightWidget holder="Nathaniel J. Liberty" initialYear={2019} />
        </Footer>
      </LayoutContainer>
    </>
  );
}

function listenForWindowScroll(setIsWindowScrolled) {
  const handleWindowScroll = () => {
    window.scrollY > 0 ? setIsWindowScrolled(true) : setIsWindowScrolled(false);
  };
  window.addEventListener('scroll', handleWindowScroll);
  return () => window.removeEventListener('scroll', handleWindowScroll);
}
