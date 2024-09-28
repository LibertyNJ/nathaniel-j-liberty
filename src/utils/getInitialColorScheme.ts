import { ColorScheme, isColorScheme } from '../style/color';

/**
 * Returns the initial color scheme that should be used by the website.
 *
 * Defaults to `'dark'` if the user has no preference.
 */
export function getInitialColorScheme(): ColorScheme {
  const storedScheme = localStorage.getItem('colorScheme');

  if (storedScheme !== null && isColorScheme(storedScheme)) {
    return storedScheme;
  }

  if (
    typeof nathanielJLibertyInitialColorScheme !== 'undefined' &&
    isColorScheme(nathanielJLibertyInitialColorScheme)
  ) {
    return nathanielJLibertyInitialColorScheme;
  }

  return 'dark';
}

declare var nathanielJLibertyInitialColorScheme: unknown;
