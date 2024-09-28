import styled from 'styled-components';

import Props from './Props';
import { baseline, breakpoint, transition } from '../../../../../../style';

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 calc(3 * ${baseline}) 0 auto;
  opacity: ${(props) => (props.$isEnabled ? 1 : 0)};
  transition: opacity ${transition.duration};

  @media (min-width: ${breakpoint.md}) {
    margin: 0 0 0 auto;
  }
`;
