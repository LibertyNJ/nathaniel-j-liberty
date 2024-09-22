import styled from 'styled-components';

import {
  baseline,
  breakpoint,
  transition,
  typography,
} from '../../../../../../../style';
import ExternalLink from '../../../../../../ExternalLink';
import Props from './Props';

export default styled(ExternalLink)<Props>`
  color: ${(props) => props.theme.contrast};
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};
  margin: 0 calc(6 * ${baseline});
  transition: color ${transition.duration}, filter ${transition.duration};

  &:focus {
    filter: drop-shadow(0 0 10px ${(props) => props.theme.contrast});
  }

  &:hover {
    color: ${(props) => props.hoverColor ?? props.theme.contrast};
  }

  @media (min-width: ${breakpoint.md}) {
    margin: 0 calc(3 * ${baseline}) 0;
  }
`;
