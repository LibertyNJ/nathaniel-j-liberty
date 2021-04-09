import styled from 'styled-components';

import { baseline } from '../../style';

export default styled.div`
  break-inside: avoid;
  margin-bottom: calc(6 * ${baseline});

  ul {
    margin-bottom: 0;
  }
`;
