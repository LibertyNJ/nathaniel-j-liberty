import styled from 'styled-components';

import Props from './Props';

export default styled.div<Props>`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
`;
