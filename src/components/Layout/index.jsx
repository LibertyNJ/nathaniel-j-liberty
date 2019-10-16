import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const Div = styled.div`
  min-height: 100vh;
`;

export default function Layout({ children, ...restProps }) {
  return (
    <>
      <GlobalStyle />
      <Div {...restProps}>
        <header />
        <main>{children}</main>
        <footer />
      </Div>
    </>
  );
}
