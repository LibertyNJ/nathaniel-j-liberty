import styled from 'styled-components';

import { baseline, breakpoint, typography } from '../../../../../../../style';

export default styled.li`
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};
  margin-bottom: calc(6 * ${baseline});
  text-align: center;

  @media (min-width: ${breakpoint.md}) {
    margin: 0 0 0 calc(6 * ${baseline});
  }
`;
