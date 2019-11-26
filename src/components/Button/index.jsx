import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { variables as styleVariables } from '../GlobalStyle';

const StyledButton = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 0.25rem;
  color: white;
  font-family: 'Fira Mono', monospace;
  font-size: ${props => {
    switch (props.size) {
      case 'large':
        return styleVariables.h4.xs.rem;
      case 'medium':
        return styleVariables.h5.xs.rem;
      case 'small':
        return styleVariables.h6.xs.rem;
      default:
        throw new Error(
          `Button component received invalid size prop: ${props.size}`
        );
    }
  }}rem;
  line-height: ${props => {
    switch (props.size) {
      case 'large':
        return styleVariables.h4.xs.lh;
      case 'medium':
        return styleVariables.h5.xs.lh;
      case 'small':
        return styleVariables.h6.xs.lh;
      default:
        throw new Error(
          `Button component received invalid size prop: ${props.size}`
        );
    }
  }};
  padding: ${props => {
    switch (props.size) {
      case 'large':
        return 2 * styleVariables.baselinePixels - 1;
      case 'medium':
        return styleVariables.baselinePixels - 1;
      case 'small':
        return styleVariables.baselinePixels - 1;
      default:
        throw new Error(
          `Button component received invalid size prop: ${props.size}`
        );
    }
  }}px;
  text-align: center;
  text-decoration: none;
  transition: background 500ms, color 500ms, filter 500ms;
  white-space: nowrap;

  :focus {
    background: black;
    filter: drop-shadow(0 0 5px white);
  }

  :hover {
    background: white;
    color: black;
    cursor: pointer;
  }

  @media (min-width: ${styleVariables.breakpoint.md}px) {
    font-size: ${props => {
      switch (props.size) {
        case 'large':
          return styleVariables.h4.md.rem;
        case 'medium':
          return styleVariables.h5.md.rem;
        case 'small':
          return styleVariables.h6.md.rem;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }}rem;
    line-height: ${props => {
      switch (props.size) {
        case 'large':
          return styleVariables.h4.md.lh;
        case 'medium':
          return styleVariables.h5.md.lh;
        case 'small':
          return styleVariables.h6.md.lh;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }};
  }

  @media (min-width: ${styleVariables.breakpoint.lg}px) {
    font-size: ${props => {
      switch (props.size) {
        case 'large':
          return styleVariables.h4.lg.rem;
        case 'medium':
          return styleVariables.h5.lg.rem;
        case 'small':
          return styleVariables.h6.lg.rem;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }}rem;
    line-height: ${props => {
      switch (props.size) {
        case 'large':
          return styleVariables.h4.lg.lh;
        case 'medium':
          return styleVariables.h5.lg.lh;
        case 'small':
          return styleVariables.h6.lg.lh;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }};
  }
`;

Button.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Button.defaultProps = {
  size: 'medium',
};

export function Button({ size, ...restProps }) {
  return <StyledButton size={size} {...restProps} />;
}
