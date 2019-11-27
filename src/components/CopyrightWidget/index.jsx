import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
`;

CopyrightWidget.propTypes = {
  holder: PropTypes.string.isRequired,
  initialYear: PropTypes.number.isRequired,
};

export function CopyrightWidget({ holder, initialYear, ...restProps }) {
  const currentYear = new Date().getFullYear();
  return (
    <StyledDiv {...restProps}>
      © {holder} {initialYear}
      {isPastInitialYear(currentYear, initialYear) && `–${currentYear}`}
    </StyledDiv>
  );
}

function isPastInitialYear(currentYear, initialYear) {
  return currentYear > initialYear;
}
