import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import { baseline, breakpoint, transition, typography } from '../../style';

export default createGlobalStyle`
  ${styledNormalize}

  @font-face {
    font-family: 'Fira Mono';
    font-style: normal;
    font-weight: normal;
    src: "../../assets/fonts/FiraMono/FiraMono-Regular.woff2" format("woff2"),
         "../../assets/fonts/FiraMono/FiraMono-Regular.woff" format("woff");
  }
  
  @font-face {
    font-family: 'Fira Mono';
    font-style: bold;
    font-weight: normal;
    src: "../../assets/fonts/FiraMono/FiraMono-Bold.woff2" format("woff2"),
         "../../assets/fonts/FiraMono/FiraMono-Bold.woff" format("woff");
  }
  
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: normal;
    src: "../../assets/fonts/FiraSans/FiraSans-Regular.woff2" format("woff2"),
         "../../assets/fonts/FiraSans/FiraSans-Regular.woff" format("woff");
  }
  
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: bold;
    src: "../../assets/fonts/FiraSans/FiraSans-Bold.woff2" format("woff2"),
         "../../assets/fonts/FiraSans/FiraSans-Bold.woff" format("woff");
  }
  
  @font-face {
    font-family: 'Fira Sans';
    font-style: italic;
    font-weight: normal;
    src: "../../assets/fonts/FiraSans/FiraSans-Italic.woff2" format("woff2"),
         "../../assets/fonts/FiraSans/FiraSans-Italic.woff" format("woff");
  }
  
  @font-face {
    font-family: 'Fira Sans';
    font-style: italic;
    font-weight: bold;
    src: "../../assets/fonts/FiraSans/FiraSans-BoldItalic.woff2" format("woff2"),
         "../../assets/fonts/FiraSans/FiraSans-BoldItalic.woff" format("woff");
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }
  
  html {
    background: var(--color-base);
    color: var(--color-contrast);
    font-family: ${typography.font.sansSerif};
    font-size: 100%;
    overflow-x: hidden;
    transition: background ${transition.duration};
  }
  
  p {
    font-size: ${typography.fontSize.body.xs};
    line-height: ${typography.lineHeight.body.xs};
    margin-bottom: calc(6 * ${baseline});
    transition: color ${transition.duration};
  }

  small {
    font-size: ${typography.fontSize.small.xs};
    line-height: ${typography.lineHeight.small.xs};
    margin-bottom: calc(6 * ${baseline});
    transition: color ${transition.duration};
  }
  
  ul {
    margin-bottom: calc(6 * ${baseline});
    padding-left: 1em;
  
    li {
      font-size: ${typography.fontSize.body.xs};
      line-height: ${typography.lineHeight.body.xs};
      transition: color ${transition.duration};
    }
  }
  
  h1 {
    font-size: ${typography.fontSize.h1.xs};
    line-height: ${typography.lineHeight.h1.xs};
    margin: 0 0 calc(6 * ${baseline});
    transition: color ${transition.duration};

  }
  
  h2 {
    font-size: ${typography.fontSize.h2.xs};
    line-height: ${typography.lineHeight.h2.xs};
    transition: color ${transition.duration};

  }
  
  h3 {
    font-size: ${typography.fontSize.h3.xs};
    line-height: ${typography.lineHeight.h3.xs};
    transition: color ${transition.duration};

  }
  
  h4 {
    font-size: ${typography.fontSize.h4.xs};
    line-height: ${typography.lineHeight.h4.xs};
    transition: color ${transition.duration};

  }
  
  h5 {
    font-size: ${typography.fontSize.h5.xs};
    line-height: ${typography.lineHeight.h5.xs};
    transition: color ${transition.duration};

  }
  
  h6 {
    font-size: ${typography.fontSize.h6.xs};
    line-height: ${typography.lineHeight.h6.xs};
    transition: color ${transition.duration};

  }
  
  @media (min-width: ${breakpoint.md}) {
    h1 {
      font-size: ${typography.fontSize.h1.md};
      line-height: ${typography.lineHeight.h1.md};
    }
  
    h2 {
      font-size: ${typography.fontSize.h2.md};
      line-height: ${typography.lineHeight.h2.md};
    }
  
    h3 {
      font-size: ${typography.fontSize.h3.md};
      line-height: ${typography.lineHeight.h3.md};
    }
  
    h4 {
      font-size: ${typography.fontSize.h4.md};
      line-height: ${typography.lineHeight.h4.md};
    }
  
    h5 {
      font-size: ${typography.fontSize.h5.md};
      line-height: ${typography.lineHeight.h5.md};
    }
  
    h6 {
      font-size: ${typography.fontSize.h6.md};
      line-height: ${typography.lineHeight.h6.md};
    }
  }
  
  @media (min-width: ${breakpoint.lg}) {
    h1 {
      font-size: ${typography.fontSize.h1.lg};
      line-height: ${typography.lineHeight.h1.lg};
    }
  
    h2 {
      font-size: ${typography.fontSize.h2.lg};
      line-height: ${typography.lineHeight.h2.lg};
    }
  
    h3 {
      font-size: ${typography.fontSize.h3.lg};
      line-height: ${typography.lineHeight.h3.lg};
    }
  
    h4 {
      font-size: ${typography.fontSize.h4.lg};
      line-height: ${typography.lineHeight.h4.lg};
    }
  
    h5 {
      font-size: ${typography.fontSize.h5.lg};
      line-height: ${typography.lineHeight.h5.lg};
    }
  
    h6 {
      font-size: ${typography.fontSize.h6.lg};
      line-height: ${typography.lineHeight.h6.lg};
    }
  }
`;
