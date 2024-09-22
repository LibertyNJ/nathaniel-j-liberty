const BLACK = '#000';
const DARK_GRAY = '#333';
const MEDIUM_GRAY = '#808080';
const LIGHT_GRAY = '#ccc';
const WHITE = '#fff';

const gitHub = {
  gray: '#333',
};

const linkedIn = {
  blue: '#2867b2',
};

export const color = {
  black: BLACK,
  body: DARK_GRAY,
  darkGray: DARK_GRAY,
  gitHub,
  lightGray: LIGHT_GRAY,
  linkedIn,
  mediumGray: MEDIUM_GRAY,
  white: WHITE,
};

export const darkTheme = {
  base: BLACK,
  contrast: WHITE,
  hover: MEDIUM_GRAY,
};

export const lightTheme = {
  base: WHITE,
  contrast: BLACK,
  hover: MEDIUM_GRAY,
};

export function getColorScheme(): ColorScheme {
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export type ColorScheme = 'dark' | 'light';
