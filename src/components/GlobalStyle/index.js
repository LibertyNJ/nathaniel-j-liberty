import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import fonts from './fonts';
import { variables } from './variables';

export { variables } from './variables';
export const GlobalStyle = createGlobalStyle`
${styledNormalize}
${fonts}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  background: black;
  color: white;
  font-family: 'Fira Sans', sans-serif;
  font-size: 100%;
  overflow-x: hidden;
}
p {
  font-size: ${variables.body.xs.rem}rem;
  line-height: ${variables.body.xs.lh};
  margin-bottom: ${2 * variables.baselinePixels}px;
}
ul {
  padding-inline-start: 1rem;
}
h1 {
  font-size: ${variables.h1.xs.rem}rem;
  line-height: ${variables.h1.xs.lh};
  margin: 0 0 ${2 * variables.baselinePixels}px 0;
}
h2 {
  font-size: ${variables.h2.xs.rem}rem;
  line-height: ${variables.h2.xs.lh};
  margin-bottom: ${2 * variables.baselinePixels}px;
}
h3 {
  font-size: ${variables.h3.xs.rem}rem;
  line-height: ${variables.h3.xs.lh};
  margin-bottom: ${2 * variables.baselinePixels}px;
}
h4 {
  font-size: ${variables.h4.xs.rem}rem;
  line-height: ${variables.h4.xs.lh};
  margin-bottom: ${2 * variables.baselinePixels}px;
}
h5 {
  font-size: ${variables.h5.xs.rem}rem;
  line-height: ${variables.h5.xs.lh};
  margin-bottom: ${2 * variables.baselinePixels}px;
}
h6 {
  font-size: ${variables.h6.xs.rem}rem;
  line-height: ${variables.h6.xs.lh};
  margin-bottom: ${2 * variables.baselinePixels}px;
}

@media (min-width: ${variables.breakpoint.md}px) {
  h1 {
    font-size: ${variables.h1.md.rem}rem;
    line-height: ${variables.h1.md.lh};
  }
  h2 {
    font-size: ${variables.h2.md.rem}rem;
    line-height: ${variables.h2.md.lh};
  }
  h3 {
    font-size: ${variables.h3.md.rem}rem;
    line-height: ${variables.h3.md.lh};
  }
  h4 {
    font-size: ${variables.h4.md.rem}rem;
    line-height: ${variables.h4.md.lh};
  }
  h5 {
    font-size: ${variables.h5.md.rem}rem;
    line-height: ${variables.h5.md.lh};
  }
  h6 {
    font-size: ${variables.h6.md.rem}rem;
    line-height: ${variables.h6.md.lh};
  }
}

@media (min-width: ${variables.breakpoint.lg}px) {
  h1 {
    font-size: ${variables.h1.lg.rem}rem;
    line-height: ${variables.h1.lg.lh};
  }
  h2 {
    font-size: ${variables.h2.lg.rem}rem;
    line-height: ${variables.h2.lg.lh};
  }
  h3 {
    font-size: ${variables.h3.lg.rem}rem;
    line-height: ${variables.h3.lg.lh};
  }
  h4 {
    font-size: ${variables.h4.lg.rem}rem;
    line-height: ${variables.h4.lg.lh};
  }
  h5 {
    font-size: ${variables.h5.lg.rem}rem;
    line-height: ${variables.h5.lg.lh};
  }
  h6 {
    font-size: ${variables.h6.lg.rem}rem;
    line-height: ${variables.h6.lg.lh};
  }
}
`;
