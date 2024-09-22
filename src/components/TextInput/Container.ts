import styled from 'styled-components';

import { baseline } from '../../style';

export default styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(6 * ${baseline});

  &:last-of-type {
    margin-bottom: calc(12 * ${baseline});
  }
`;
