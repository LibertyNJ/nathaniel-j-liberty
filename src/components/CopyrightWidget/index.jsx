import PropTypes from 'prop-types';
import React from 'react';

CopyrightWidget.propTypes = {
  holder: PropTypes.string.isRequired,
  initialYear: PropTypes.number.isRequired,
};

export default function CopyrightWidget({ holder, initialYear, ...restProps }) {
  const currentYear = new Date().getFullYear();
  return (
    <div {...restProps}>
      © {holder} {initialYear}
      {isPastInitialYear(currentYear, initialYear) && `–${currentYear}`}
    </div>
  );
}

function isPastInitialYear(currentYear, initialYear) {
  return currentYear > initialYear;
}
