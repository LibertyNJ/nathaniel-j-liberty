import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { baseline, borderThickness } from '../../style';

export default styled(GatsbyImage)`
  border: ${borderThickness} solid var(--color-contrast);
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
  width: 100%;
`;
