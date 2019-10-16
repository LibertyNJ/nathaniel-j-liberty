import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import CopyrightWidget from '../CopyrightWidget';
import GlobalStyle from '../GlobalStyle';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  margin-top: auto;
`;
const Header = styled.header``;
const Main = styled.main`
  flex: 1;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children, ...restProps }) {
  return (
    <>
      <GlobalStyle />
      <Div {...restProps}>
        <Header />
        <Main>{children}</Main>
        <Footer>
          <CopyrightWidget holder="Nathaniel J. Liberty" initialYear={2019} />
        </Footer>
      </Div>
    </>
  );
}
