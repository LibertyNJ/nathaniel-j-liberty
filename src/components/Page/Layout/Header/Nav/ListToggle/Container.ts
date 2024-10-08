import styled from 'styled-components';

import {
  baseline,
  breakpoint,
  transition,
  typography,
} from '../../../../../../style';

export default styled.button`
  background: none;
  border: none;
  color: var(--color-contrast);
  font-size: ${typography.fontSize.h1.xs};
  line-height: ${typography.lineHeight.h1.xs};
  margin-left: auto;
  padding: calc(3 * ${baseline}) 0;
  transition:
    color ${transition.duration},
    filter ${transition.duration};
  width: ${typography.fontSize.h1.xs};

  &:focus {
    filter: drop-shadow(0 0 5px var(--color-contrast))
      drop-shadow(0 0 10px var(--color-contrast));
  }

  :&hover {
    cursor: pointer;
  }

  @media (min-width: ${breakpoint.md}) {
    display: none;
  }
`;
