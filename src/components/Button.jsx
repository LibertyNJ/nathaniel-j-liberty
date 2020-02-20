import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { baseline, breakpoint, color, typography } from '../style';

const BORDER_THICKNESS = '1px';
const TRANSITION_TIME = '500ms';

const StyledButton = styled.button`
  background: none;
  border: ${BORDER_THICKNESS} solid ${color.white};
  border-radius: ${baseline};
  color: ${color.white};
  font-family: ${typography.font.monospace};
  font-size: ${props => {
    switch (props.size) {
      case 'large':
        return typography.fontSize.h4.xs;
      case 'medium':
        return typography.fontSize.h5.xs;
      case 'small':
        return typography.fontSize.h6.xs;
      default:
        throw new Error(
          `Button component received invalid size prop: ${props.size}`
        );
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case 'large':
        return typography.lineHeight.h4.xs;
      case 'medium':
        return typography.lineHeight.h5.xs;
      case 'small':
        return typography.lineHeight.h6.xs;
      default:
        throw new Error(
          `Button component received invalid size prop: ${props.size}`
        );
    }
  }};
  padding: ${props => {
    switch (props.size) {
      case 'large':
        return `calc(6 * ${baseline} - ${BORDER_THICKNESS})`;
      case 'medium':
        return `calc(3 * ${baseline} - ${BORDER_THICKNESS})`;
      case 'small':
        return `calc(3 * ${baseline} - ${BORDER_THICKNESS})`;
      default:
        throw new Error(
          `Button component received invalid size prop: ${props.size}`
        );
    }
  }};
  text-align: center;
  text-decoration: none;
  transition: background ${TRANSITION_TIME}, color ${TRANSITION_TIME},
    filter ${TRANSITION_TIME};
  white-space: nowrap;

  :focus {
    background: ${color.black};
    filter: drop-shadow(0 0 5px ${color.white});
  }

  :hover {
    background: ${color.white};
    color: ${color.black};
    cursor: pointer;
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: ${props => {
      switch (props.size) {
        case 'large':
          return typography.fontSize.h4.md;
        case 'medium':
          return typography.fontSize.h5.md;
        case 'small':
          return typography.fontSize.h6.md;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }};
    line-height: ${props => {
      switch (props.size) {
        case 'large':
          return typography.lineHeight.h4.md;
        case 'medium':
          return typography.lineHeight.h5.md;
        case 'small':
          return typography.lineHeight.h6.md;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${props => {
      switch (props.size) {
        case 'large':
          return typography.fontSize.h4.lg;
        case 'medium':
          return typography.fontSize.h5.lg;
        case 'small':
          return typography.fontSize.h6.lg;
        default:
          throw new Error(
            `Button component received invalid size prop: ${props.size}`
          );
      }
    }};
    line-height: ${props => {
      switch (props.size) {
        case 'large':
          return typography.lineHeight.h4.lg;
        case 'medium':
          return typography.lineHeight.h5.lg;
        case 'small':
          return typography.lineHeight.h6.lg;
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

export default function Button({ size, ...restProps }) {
  return <StyledButton size={size} {...restProps} />;
}
