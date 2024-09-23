import styled from 'styled-components';

import { baseline, transition, typography } from '../../../../../style';
import Props from './Props';

export default styled.header<Props>`
  background: ${(props) =>
    props.$backgroundIsOpaque ? 'var(--color-base)' : 'none'};
  display: flex;
  flex: initial;
  font-family: ${typography.font.monospace};
  justify-content: space-between;
  padding: 0 calc(6 * ${baseline});
  position: sticky;
  top: 0;
  transition: background ${transition.duration};
  z-index: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
