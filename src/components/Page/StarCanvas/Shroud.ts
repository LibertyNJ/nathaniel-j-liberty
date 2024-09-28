import styled from 'styled-components';

import { transition } from '../../../style';

export default styled.div<ShroudProps>`
  background: linear-gradient(
    rgba(var(--color-shroud), 0),
    rgba(var(--color-shroud), 1) ${(props) => props.$breakpoints},
    rgba(var(--color-shroud), 0)
  );
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: background ${transition.duration};
`;

export interface ShroudProps {
  $breakpoints: string;
}
