import styled from 'styled-components';

import { typography } from '../../../../../style';

export default styled.span`
  display: block;
  font-size: ${typography.fontSize.small.xs};
  line-height: ${typography.lineHeight.small.xs};

  ::before {
    content: '// ';
  }
`;
