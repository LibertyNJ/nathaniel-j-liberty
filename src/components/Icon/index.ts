import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Props from './Props';

export default styled(FontAwesomeIcon)<Props>`
  margin-left: ${(props) => (props.$marginLeft ? '1' : '0')}em;
  margin-right: ${(props) => (props.$marginRight ? '1' : '0')}em;
`;
