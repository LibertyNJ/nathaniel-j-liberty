import { Link } from 'gatsby';
import styled from 'styled-components';

import {
  baseline,
  borderThickness,
  breakpoint,
  transition,
} from '../../../../../../../style';

export default styled(Link)`
  border: none;
  border-radius: ${baseline};
  display: block;
  padding: calc(6 * ${baseline});
  transition:
    background ${transition.duration},
    border-color ${transition.duration},
    filter ${transition.duration};

  &:focus {
    background: var(--color-base);
    filter: drop-shadow(0 0 5px var(--color-contrast))
      drop-shadow(0 0 10px var(--color-contrast));
  }

  &:hover {
    background: var(--color-contrast);
    color: var(--color-base);
  }

  &:active,
  &.active {
    border: ${borderThickness} var(--color-contrast) solid;
    padding: calc(6 * ${baseline} - ${borderThickness});
  }

  @media (min-width: ${breakpoint.md}) {
    padding: calc(3 * ${baseline});

    &:active,
    &.active {
      padding: calc(3 * ${baseline} - ${borderThickness});
    }
  }
`;
