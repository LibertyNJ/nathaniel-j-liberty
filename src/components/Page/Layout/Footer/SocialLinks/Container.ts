import styled from 'styled-components';

import { baseline, breakpoint } from '../../../../../style';

export default styled.div`
  display: flex;
  margin-bottom: calc(3 * ${baseline});
  justify-content: center;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 0;
  }
`;
