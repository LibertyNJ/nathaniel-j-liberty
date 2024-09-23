import styled from 'styled-components';

import { color, transition } from '../../style';

export default styled.a`
  color: var(--color-contrast);
  transition: color ${transition.duration};

  &:hover {
    color: ${color.hover};
  }
`;
