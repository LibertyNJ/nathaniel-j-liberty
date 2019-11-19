import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const BASELINE_PIXELS = 12;
const REM_PIXELS = 16;
const H1_REMS = 3;
const H2_REMS = 2.5;
const H3_REMS = 2;
const H4_REMS = 1.5;
const H5_REMS = 1.25;
const H6_REMS = 1;
const BODY_REMS = 1;

export const GlobalStyle = createGlobalStyle`
${styledNormalize}
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
    background: black;
    color: white;
    font-family: 'Fira Sans', sans-serif;
    line-height: ${calculateLineHeight(BODY_REMS)};
  }
  h1 {
    font-size: ${H1_REMS}rem;
    line-height: ${calculateLineHeight(H1_REMS)};
    margin: 0 0 1rem 0;
  }
  h2 {
    font-size: ${H2_REMS}rem;
    line-height: ${calculateLineHeight(H2_REMS)};
    margin-bottom: 1rem;
  }
  h3 {
    font-size: ${H3_REMS}rem;
    line-height: ${calculateLineHeight(H3_REMS)};
    margin-bottom: 1rem;
  }
  h4 {
    font-size: ${H4_REMS}rem;
    line-height: ${calculateLineHeight(H4_REMS)};
    margin-bottom: 1rem;
  }
  h5 {
    font-size: ${H5_REMS}rem;
    line-height: ${calculateLineHeight(H5_REMS)};
    margin-bottom: 1rem;
  }
  h6 {
    font-size: ${H6_REMS}rem;
    line-height: ${calculateLineHeight(H6_REMS)};
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

function calculateLineHeight(rems, baselines = 1) {
  const lineHeight = (baselines * BASELINE_PIXELS) / (rems * REM_PIXELS);
  return lineHeight > 1 ? lineHeight : calculateLineHeight(rems, baselines + 1);
}
