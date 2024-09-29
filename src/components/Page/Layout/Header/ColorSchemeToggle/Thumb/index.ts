import styled from 'styled-components';

import Props from './Props';
import { transition, typography } from '../../../../../../style';

export default styled.span<Props>`
  --size: calc(
    ${typography.lineHeight.h5.lg} * ${typography.fontSize.h5.lg} - 4px
  );

  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &:before {
    background: var(--color-contrast);
    border-radius: 50%;
    content: '';
    height: var(--size);
    left: 1px;
    position: absolute;
    top: 1px;
    ${(props) =>
      props.$isEnabled ? `transition: transform ${transition.duration};` : ''}
    width: var(--size);
  }

  input:checked + &:before {
    transform: translateX(
      calc(2.2 * ${typography.fontSize.h5.lg} - var(--size) - 4px)
    );
  }
`;
