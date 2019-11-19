import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { CopyrightWidget, GlobalStyle } from '..';
import { NavigationBar } from '../NavigationBar'; // Issue with styling a component imported from an index

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Footer = styled.footer`
  display: flex;
  flex: initial;
  justify-content: space-around;
  margin-top: auto;
`;
const Header = styled.header`
  display: flex;
  flex: initial;
`;
const Main = styled.main`
  display: ${props => props.mainDisplay || 'block'};
  flex: auto;
`;
const StyledNavigationBar = styled(NavigationBar)`
  flex: auto;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  mainDisplay: PropTypes.string,
};

export function Layout({ children, mainDisplay, ...restProps }) {
  return (
    <>
      <GlobalStyle />
      <Div {...restProps}>
        <Header>
          <StyledNavigationBar />
        </Header>
        <Main mainDisplay={mainDisplay}>{children}</Main>
        <Footer>
          <CopyrightWidget holder="Nathaniel J. Liberty" initialYear={2019} />
        </Footer>
      </Div>
    </>
  );
}
