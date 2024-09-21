import styled from 'styled-components';

import { breakpoint } from '../../../../../style';
import Props from './Props';

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 33rem;

  ${(props) =>
    props.$breakpoints &&
    `
      width: 100%;
    
      @media (min-width: ${breakpoint.sm}) {
        max-width: 540px;
      }
    
      @media (min-width: ${breakpoint.md}) {
        max-width: 720px;
      }
    
      @media (min-width: ${breakpoint.lg}) {
        max-width: 960px;
      }
    
      @media (min-width: ${breakpoint.xl}) {
        max-width: 1140px;
      }
    `}

  ${(props) => props.$unlimitedWidth && 'max-width: none;'}
`;
