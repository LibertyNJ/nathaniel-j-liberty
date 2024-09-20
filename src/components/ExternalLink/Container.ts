import styled from 'styled-components';

import { color, transition } from '../../style';

export default styled.a`
  color: ${color.white};
  transition: color ${transition.duration};

  &:hover {
    color: ${color.lightGray};
  }
`;
