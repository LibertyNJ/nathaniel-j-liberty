import styled from 'styled-components';

import { breakpoint, typography } from '../style';

export default styled.span`
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};

  &:before {
    content: '// ';
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: ${typography.fontSize.h3.md};
    line-height: ${typography.lineHeight.h3.md};
  }

  @media (min-width: ${breakpoint.lg}) {
    font-size: ${typography.fontSize.h3.lg};
    line-height: ${typography.lineHeight.h3.lg};
  }
`;
