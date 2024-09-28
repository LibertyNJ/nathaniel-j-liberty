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
  hover: GRAY,
  lightBlack: LIGHT_BLACK,
  lightGray: LIGHT_GRAY,
  linkedIn,
  mediumGray: GRAY,
  white: WHITE,
};

export const darkTheme: Theme = {
  base: BLACK,
  contrast: WHITE,
  hover: GRAY,
};

export const lightTheme: Theme = {
  base: WHITE,
  contrast: BLACK,
  hover: GRAY,
};

export type Theme = {
  readonly base: string;
  readonly contrast: string;
  readonly hover: string;
};

export type ColorScheme = 'dark' | 'light';

export function isColorScheme(value: unknown): value is ColorScheme {
  return value === 'dark' || value === 'light';
}
