import styled from 'styled-components';

import { breakpoint, transition, typography } from '../../style';

export default styled.label`
  font-family: ${typography.font.monospace};
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};
  transition: color ${transition.duration};

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h5.md};
    line-height: ${typography.lineHeight.h5.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h5.lg};
    line-height: ${typography.lineHeight.h5.lg};
  }
`;
