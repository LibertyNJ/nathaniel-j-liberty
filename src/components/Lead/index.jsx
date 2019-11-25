import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { variables as styleVariables } from '../GlobalStyle';

const StyledParagraph = styled.p`
  font-size: ${styleVariables.h5.xs.rem}rem;
  line-height: ${styleVariables.h5.xs.lh};

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${styleVariables.h5.md.rem}rem;
    line-height: ${styleVariables.h5.md.lh};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${styleVariables.h5.lg.rem}rem;
    line-height: ${styleVariables.h5.lg.lh};
  }
`;

Lead.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Lead({ children, ...restProps }) {
  return <StyledParagraph {...restProps}>{children}</StyledParagraph>;
}
