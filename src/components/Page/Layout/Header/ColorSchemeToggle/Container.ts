import styled from 'styled-components';

import { baseline, breakpoint } from '../../../../../style';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 calc(3 * ${baseline}) 0 auto;

  @media (min-width: ${breakpoint.md}) {
    margin: 0 0 0 auto;
  }
`;
