import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { baseline, borderThickness, color } from '../../style';

export default styled(GatsbyImage)`
  border: ${borderThickness} solid ${color.white};
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
  width: 100%;
`;
