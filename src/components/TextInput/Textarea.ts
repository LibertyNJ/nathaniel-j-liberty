import styled from 'styled-components';

import {
  baseline,
  borderThickness,
  breakpoint,
  color,
  transition,
  typography,
} from '../../style';

export default styled.textarea`
  background: ${color.black};
  border: ${borderThickness} solid ${color.white};
  border-radius: ${baseline};
  color: ${color.white};
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  padding: calc(3 * ${baseline} - ${borderThickness});
  transition: filter ${transition.duration};

  &:focus {
    filter: drop-shadow(0 0 5px ${color.white});
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.body.md};
    line-height: ${typography.lineHeight.body.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.body.lg};
    line-height: ${typography.lineHeight.body.lg};
  }
`;
