import styled from 'styled-components';

import { baseline, breakpoint } from '../../style';
import Props from './Props';

export default styled.div<Props>`
  display: grid;
  gap: calc(6 * ${baseline});
  margin-bottom: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.sm}) {
    grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  }
`;
