import styled from 'styled-components';

import { borderThickness, transition, typography } from '../../../../../style';

export default styled.label`
  border: ${borderThickness} solid var(--color-contrast);
  border-radius: ${typography.fontSize.h5.lg};
  cursor: pointer;
  height: calc(${typography.lineHeight.h5.lg} * ${typography.fontSize.h5.lg});
  position: relative;
  transition:
    background ${transition.duration},
    border ${transition.duration},
    color ${transition.duration},
    filter ${transition.duration};
  width: calc(2.2 * ${typography.fontSize.h5.lg});

  &:focus-within {
    background: var(--color-base);
    filter: drop-shadow(0 0 5px var(--color-contrast))
      drop-shadow(0 0 10px var(--color-contrast));
  }
`;
