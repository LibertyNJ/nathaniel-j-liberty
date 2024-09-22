import styled from 'styled-components';

import { transition } from '../../style';

export default styled.a`
  color: ${(props) => props.theme.contrast};
  transition: color ${transition.duration};

  &:hover {
    color: ${(props) => props.theme.hover};
  }
`;
