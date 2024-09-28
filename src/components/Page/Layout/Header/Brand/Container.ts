import { Link } from 'gatsby';
import styled from 'styled-components';

import { baseline, transition, typography } from '../../../../../style';

export default styled(Link)`
  font-size: ${typography.fontSize.h5.xs};
  line-height: ${typography.lineHeight.h5.xs};
  margin-right: calc(3 * ${baseline});
  padding: calc(3 * ${baseline}) 0;
  white-space: nowrap;
  flex: initial;
  transition:
    color ${transition.duration},
    filter ${transition.duration};

  &:focus {
    filter: drop-shadow(0 0 5px var(--color-contrast))
      drop-shadow(0 0 10px var(--color-contrast));
  }

  &:hover {
    cursor: pointer;
  }
`;
