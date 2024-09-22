const BLACK = '#000';
const LIGHT_BLACK = '#1a1a1a';
const DARK_GRAY = '#333';
const GRAY = '#808080';
const LIGHT_GRAY = '#ccc';
const DARK_WHITE = '#e6e6e6';
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
  darkWhite: DARK_WHITE,
  gitHub,
  lightBlack: LIGHT_BLACK,
  lightGray: LIGHT_GRAY,
  linkedIn,
  mediumGray: GRAY,
  white: WHITE,
};

export const darkTheme = {
  base: BLACK,
  contrast: WHITE,
  hover: GRAY,
};

export const lightTheme = {
  base: WHITE,
  contrast: BLACK,
  hover: GRAY,
};

export function getColorScheme(): ColorScheme {
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export type ColorScheme = 'dark' | 'light';
