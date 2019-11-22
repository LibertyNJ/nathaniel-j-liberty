const baselinePixels = 12;

const breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const body = {
  xs: {
    lh: 1.5,
    rem: 1,
  },
  md: {
    lh: 1.5,
    rem: 1,
  },
  lg: {
    lh: 1.5,
    rem: 1,
  },
};

const h1 = {
  xs: {
    lh: 1.125,
    rem: 2,
  },
  md: {
    lh: 1.2,
    rem: 2.5,
  },
  lg: {
    lh: 1.25,
    rem: 3,
  },
};

const h2 = {
  xs: {
    lh: 1.286,
    rem: 1.75,
  },
  md: {
    lh: 1.125,
    rem: 2,
  },
  lg: {
    lg: 1.2,
    rem: 2.5,
  },
};

const h3 = {
  xs: {
    lh: 1.5,
    rem: 1.5,
  },
  md: {
    lh: 1.286,
    rem: 1.75,
  },
  lg: {
    lh: 1.125,
    rem: 2,
  },
};

const h4 = {
  xs: {
    lh: 1.2,
    rem: 1.25,
  },
  md: {
    lh: 1.5,
    rem: 1.5,
  },
  lg: {
    lh: 1.5,
    rem: 1.5,
  },
};

const h5 = {
  xs: {
    lh: 1.333,
    rem: 1.125,
  },
  md: {
    lh: 1.2,
    rem: 1.25,
  },
  lg: {
    lh: 1.2,
    rem: 1.25,
  },
};

const h6 = {
  xs: {
    lh: 1.5,
    rem: 1,
  },
  md: {
    lh: 1.5,
    rem: 1,
  },
  lg: {
    lh: 1.5,
    rem: 1,
  },
};

const remPixels = 16;

const small = {
  xs: {
    lh: 1.875,
    rem: 0.8,
  },
  md: {
    lh: 1.875,
    rem: 0.8,
  },
  lg: {
    lh: 1.875,
    rem: 0.8,
  },
};

export const variables = {
  baselinePixels,
  breakpoint,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  remPixels,
  small,
};

function calculateLineHeight(rems, baselines = 1) {
  const lineHeight = (baselines * baselinePixels) / (rems * remPixels);
  return lineHeight > 1 ? lineHeight : calculateLineHeight(rems, baselines + 1);
}
