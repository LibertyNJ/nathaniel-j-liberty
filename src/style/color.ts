const BLACK = '#000';
const DARK_GRAY = '#333';
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
  white: WHITE,
};

export const darkTheme = {
  base: BLACK,
  contrast: WHITE,
};

export const lightTheme = {
  base: WHITE,
  contrast: BLACK,
};

export function getColorScheme(): ColorScheme {
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export type ColorScheme = 'dark' | 'light';
