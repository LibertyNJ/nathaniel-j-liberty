import styled from 'styled-components';

import { color, transition } from '../../style';

export default styled.a`
  color: ${(props) => props.theme.contrast};
  transition: color ${transition.duration};

  &:hover {
    color: ${color.lightGray};
  }
`;
