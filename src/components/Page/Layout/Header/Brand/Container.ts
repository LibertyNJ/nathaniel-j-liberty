import { Link } from 'gatsby';
import styled from 'styled-components';

import { baseline, color, transition, typography } from '../../../../../style';

export default styled(Link)`
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};
  padding: calc(3 * ${baseline}) 0;
  white-space: nowrap;
  flex: initial;
  transition: filter ${transition.duration};

  &:focus {
    filter: drop-shadow(0 0 10px ${color.white});
  }

  :hover {
    cursor: pointer;
  }
`;
