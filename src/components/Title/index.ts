import styled from 'styled-components';

import { baseline, typography } from '../../style';
import Props from './Props';

export default styled.h1<Props>`
  font-family: ${typography.font.monospace};
  margin-bottom: calc(6 * ${baseline});
  ${(props) => props.$centered && 'text-align: center;'}
`;
