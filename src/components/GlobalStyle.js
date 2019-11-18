import { createGlobalStyle } from 'styled-components';

const BASELINE = 12;
const REM_PIXELS = 16;
const H1_REMS = 3;
const H2_REMS = 2.5;
const H3_REMS = 2;
const H4_REMS = 1.5;
const H5_REMS = 1.25;
const H6_REMS = 1;
const BODY_REMS = 1;

export default createGlobalStyle`
  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: normal;
    src: "../assets/fonts/FiraMono/FiraMono-Regular.woff2" format("woff2"),
         "../assets/fonts/FiraMono/FiraMono-Regular.woff" format("woff");
  }
  @font-face {
    font-family: 'Fira Mono';
    font-style: bold;
    font-weight: normal;
    src: "../assets/fonts/FiraMono/FiraMono-Bold.woff2" format("woff2"),
         "../assets/fonts/FiraMono/FiraMono-Bold.woff" format("woff");
  }
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: normal;
    src: "../assets/fonts/FiraSans/FiraSans-Regular.woff2" format("woff2"),
         "../assets/fonts/FiraSans/FiraSans-Regular.woff" format("woff");
  }
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: bold;
    src: "../assets/fonts/FiraSans/FiraSans-Bold.woff2" format("woff2"),
         "../assets/fonts/FiraSans/FiraSans-Bold.woff" format("woff");
  }
  @font-face {
    font-family: 'Fira Sans';
    font-style: italic;
    font-weight: normal;
    src: "../assets/fonts/FiraSans/FiraSans-Italic.woff2" format("woff2"),
         "../assets/fonts/FiraSans/FiraSans-Italic.woff" format("woff");
  }
  @font-face {
    font-family: 'Fira Sans';
    font-style: italic;
    font-weight: bold;
    src: "../assets/fonts/FiraSans/FiraSans-BoldItalic.woff2" format("woff2"),
         "../assets/fonts/FiraSans/FiraSans-BoldItalic.woff" format("woff");
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Fira Sans', sans-serif;
    line-height: ${calculateLineHeight(BODY_REMS)};
  }
  h1, h2 {
    font-family: 'Fira Mono', monospace;
  }
  h1 {
  font-size: ${H1_REMS}rem;
    line-height: ${calculateLineHeight(H1_REMS)};
  }
  h2 {
  font-size: ${H2_REMS}rem;
    line-height: ${calculateLineHeight(H2_REMS)};
  }
  h3 {
  font-size: ${H3_REMS}rem;
    line-height: ${calculateLineHeight(H3_REMS)};
  }
  h4 {
  font-size: ${H4_REMS}rem;
    line-height: ${calculateLineHeight(H4_REMS)};
  }
  h5 {
  font-size: ${H5_REMS}rem;
    line-height: ${calculateLineHeight(H5_REMS)};
  }
  h6 {
  font-size: ${H6_REMS}rem;
    line-height: ${calculateLineHeight(H6_REMS)};
  }
`;

function calculateLineHeight(rems, baselines = 1) {
  const lineHeight = (baselines * BASELINE) / (rems * REM_PIXELS);
  return lineHeight > 1 ? lineHeight : calculateLineHeight(rems, baselines + 1);
}
