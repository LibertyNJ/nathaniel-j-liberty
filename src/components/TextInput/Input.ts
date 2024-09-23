import styled from 'styled-components';

import {
  baseline,
  breakpoint,
  borderThickness,
  transition,
  typography,
} from '../../style';

export default styled.input`
  background: var(--color-base);
  border: ${borderThickness} solid var(--color-contrast);
  border-radius: ${baseline};
  color: var(--color-contrast);
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  padding: calc(3 * ${baseline} - ${borderThickness});
  transition: filter ${transition.duration};

  &:focus {
    filter: drop-shadow(0 0 5px var(--color-contrast))
      drop-shadow(0 0 10px var(--color-contrast));
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
