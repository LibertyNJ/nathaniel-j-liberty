import '@fortawesome/fontawesome-svg-core/styles.css';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import './icon-library';
import CopyrightWidget from '../CopyrightWidget';
import NavBar from '../NavBar';
import { baseline, breakpoint, color, typography } from '../../style';

fontAwesomeConfig.autoAddCss = false;

const TRANSITION_TIME = '500ms';

const Footer = styled.footer`
  background: ${props => (props.windowIsScrolled ? color.black : 'none')};
  flex: initial;
  font-size: ${typography.fontSize.small.xs};
  justify-content: space-around;
  line-height: ${typography.lineHeight.small.xs};
  margin-top: auto;
  padding: calc(3 * ${baseline}) calc(6 * ${baseline});
  transition: background ${TRANSITION_TIME};

  @media (min-width: ${breakpoint.md}) {
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
  padding: 0 calc(6 * ${baseline});
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: calc(3 * ${baseline});
  justify-content: center;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 0;
  }
`;

const SocialLink = styled.a`
  color: ${color.white};
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};
  margin: 0 calc(6 * ${baseline});
  transition: color ${TRANSITION_TIME}, filter ${TRANSITION_TIME};

  :focus {
    filter: drop-shadow(0 0 10px ${color.white});
  }

  :hover {
    color: ${props => props.hoverColor || color.white};
  }

  @media (min-width: ${breakpoint.md}) {
    margin: 0 calc(3 * ${baseline}) 0;
  }
`;

const StyledNavBar = styled(NavBar)`
  background: ${props => props.windowIsScrolled && color.black};
  flex: initial;
  padding: 0 calc(6 * ${baseline});
  position: sticky;
  top: 0;
  transition: background ${TRANSITION_TIME};
  z-index: 1;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainDisplay: PropTypes.string,
};

export default function Layout({ children, mainDisplay, ...restProps }) {
  const [windowIsScrolled, setWindowIsScrolled] = useState(false);

  useEffect(() => listenForWindowScroll(setWindowIsScrolled), []);

  return (
    <>
      <GlobalStyle />
      <LayoutContainer {...restProps}>
        <StyledNavBar windowIsScrolled={windowIsScrolled} />
        <Main mainDisplay={mainDisplay}>{children}</Main>
        <Footer windowIsScrolled={windowIsScrolled}>
          <SocialLinks>
            <SocialLink
              hoverColor={color.gitHub.gray}
              href="https://github.com/LibertyNJ"
              rel="noopener noreferrer"
              size="small"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </SocialLink>
            <SocialLink
              hoverColor={color.linkedIn.blue}
              href="https://linkedin.com/in/nathanieljliberty"
              rel="noopener noreferrer"
              size="small"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </SocialLink>
          </SocialLinks>
          <CopyrightWidget holder="Nathaniel J. Liberty" initialYear={2019} />
        </Footer>
      </LayoutContainer>
    </>
  );
}

function listenForWindowScroll(setWindowIsScrolled) {
  const handleWindowScroll = () => {
    isScrolled(window) ? setWindowIsScrolled(true) : setWindowIsScrolled(false);
  };

  window.addEventListener('scroll', handleWindowScroll);

  return () => window.removeEventListener('scroll', handleWindowScroll);
}

function isScrolled(window) {
  return window.scrollY > 0;
}
