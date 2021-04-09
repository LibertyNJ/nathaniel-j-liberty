import styled from 'styled-components';

import { breakpoint, typography } from '../../../style';

export default styled.span`
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h4.md};
    line-height: ${typography.lineHeight.h4.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h4.lg};
    line-height: ${typography.lineHeight.h4.lg};
  }
`;
