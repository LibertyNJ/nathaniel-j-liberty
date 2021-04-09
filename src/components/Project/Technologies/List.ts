import styled from 'styled-components';

import { breakpoint } from '../../../style';

export default styled.ul`
  columns: 2;

  @media (min-width: ${breakpoint.sm}) {
    columns: 3;
  }

  @media (min-width: ${breakpoint.md}) {
    columns: 2;
  }

  @media (min-width: ${breakpoint.lg}) {
    columns: 3;
  }
`;
