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
    color ${transition.duration},
    filter ${transition.duration};

  &:focus {
    background: ${(props) => props.theme.base};
    filter: drop-shadow(0 0 5px ${(props) => props.theme.contrast});
  }

  &:hover {
    background: ${(props) => props.theme.contrast};
    color: ${(props) => props.theme.base};
  }

  &:active,
  &.active {
    border: ${borderThickness} ${(props) => props.theme.contrast} solid;
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
