import styled from 'styled-components';

import {
  baseline,
  breakpoint,
  color,
  transition,
  typography,
} from '../../../../../style';
import Props from './Props';

export default styled.footer<Props>`
  background: ${(props) => (props.backgroundIsOpaque ? color.black : 'none')};
  flex: initial;
  font-size: ${typography.fontSize.small.xs};
  justify-content: space-around;
  line-height: ${typography.lineHeight.small.xs};
  margin-top: auto;
  padding: calc(3 * ${baseline}) calc(6 * ${baseline});
  transition: background ${transition.duration};

  @media (min-width: ${breakpoint.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;
