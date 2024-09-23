import styled from 'styled-components';

import {
  baseline,
  breakpoint,
  color,
  transition,
  typography,
} from '../../../../../../../style';
import ExternalLink from '../../../../../../ExternalLink';
import Props from './Props';

export default styled(ExternalLink)<Props>`
  color: var(--color-contrast);
  display: block;
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};
  margin: 0 calc(6 * ${baseline});
  transition:
    color ${transition.duration},
    filter ${transition.duration};

  &:focus {
    filter: drop-shadow(0 0 5px var(--color-contrast))
      drop-shadow(0 0 10px var(--color-contrast));
  }

  &:hover {
    color: ${(props) => props.hoverColor ?? color.hover};
  }

  @media (min-width: ${breakpoint.md}) {
    margin: 0 calc(3 * ${baseline}) 0;
  }
`;
