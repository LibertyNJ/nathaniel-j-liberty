import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 0.25rem;
  color: white;
  font: 1rem/1.5 'Fira Mono', monospace;
  padding: 1rem;
  transition: background 500ms, color 500ms;
  :hover {
    background: white;
    color: black;
    cursor: pointer;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}
