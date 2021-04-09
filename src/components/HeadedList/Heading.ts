import styled from 'styled-components';

import { breakpoint, typography } from '../../style';

export default styled.p`
  font-size: ${typography.fontSize.h5.xs};
  font-weight: bold;
  line-height: ${typography.lineHeight.h5.xs};
  margin-bottom: 0;

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h5.md};
    line-height: ${typography.lineHeight.h5.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h5.lg};
    line-height: ${typography.lineHeight.h5.lg};
  }
`;
