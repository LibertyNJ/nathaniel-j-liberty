import styled from 'styled-components';

import { baseline } from '../../../../../style';
import Props from './Props';

export default styled.main<Props>`
  display: ${(props) => props.display ?? 'block'};
  flex: auto;
  padding: 0 calc(6 * ${baseline});
`;
