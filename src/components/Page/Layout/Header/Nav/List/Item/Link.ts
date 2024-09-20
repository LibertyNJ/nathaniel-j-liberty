import { Link } from 'gatsby';
import styled from 'styled-components';

import {
  baseline,
  borderThickness,
  breakpoint,
  color,
  transition,
} from '../../../../../../../style';

export default styled(Link)`
  border: none;
  border-radius: ${baseline};
  display: block;
  padding: calc(6 * ${baseline});
  transition: background ${transition.duration}, color ${transition.duration},
    filter ${transition.duration};

  &:focus {
    background: ${color.black};
    filter: drop-shadow(0 0 5px ${color.white});
  }

  &:hover {
    background: ${color.white};
    color: ${color.black};
  }

  &:active,
  &.active {
    border: ${borderThickness} ${color.white} solid;
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
