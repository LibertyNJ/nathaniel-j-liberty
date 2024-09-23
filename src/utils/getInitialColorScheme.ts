import { ColorScheme } from '../style/color';

/**
 * Returns the initial color scheme that should be used by the website.
 *
 * This function depends on local storage being set by a script that runs before
 * the initial React render, or a previous session.
 *
 * Defaults to `'dark'` if local storage is `null` or invalid.
 */
export function getInitialColorScheme(): ColorScheme {
  const scheme = localStorage.getItem('colorScheme');

  if (scheme === null) {
    return 'dark';
  }

  if (scheme === 'light') {
    return 'light';
  }

  return 'dark';
}
