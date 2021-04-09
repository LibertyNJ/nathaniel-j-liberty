import styled from 'styled-components';

import {
  baseline,
  breakpoint,
  color,
  transition,
} from '../../../../../../../style';
import Props from './Props';

const VIEWPORT_COVER_HEIGHT_ADJUSTMENT = '2px'; // Prevents gap between dropdown list and viewport bottom
const VIEWPORT_COVER_TOP_ADJUSTMENT = '1px'; // Prevents gap between dropdown list and navbar

export default styled.ul<Props>`
  background: ${color.black};
  height: calc(
    100vh - ${(props) => props.topOffset}px +
      ${VIEWPORT_COVER_HEIGHT_ADJUSTMENT}
  );
  left: 0;
  list-style: none;
  margin-bottom: 0px;
  opacity: 0;
  padding: calc(6 * ${baseline});
  position: absolute;
  top: calc(${(props) => props.topOffset}px - ${VIEWPORT_COVER_TOP_ADJUSTMENT});
  transition: opacity ${transition.duration};
  visibility: hidden;
  width: 100%;

  ${(props) =>
    props.isVisiblyTransparent &&
    `
      opacity: 0;
      visibility: visible;
    `}

  ${(props) =>
    props.isVisiblyOpaque &&
    `
      opacity: 1;
      visibility: visible;
    `}

  @media (min-width: ${breakpoint.md}) {
    background: none;
    display: flex;
    height: auto;
    opacity: 1;
    padding: calc(3 * ${baseline}) 0;
    position: static;
    visibility: visible;
    width: auto;
  }
`;
