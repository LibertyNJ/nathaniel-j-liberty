import styled from 'styled-components';

import { baseline, breakpoint } from '../../style';

export default styled.section`
  @media (min-width: ${breakpoint.md}) {
    column-gap: calc(12 * ${baseline});
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    margin-bottom: calc(6 * ${baseline});
  }
`;
