import React from 'react';
import { GatsbySSR } from 'gatsby';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setPreBodyComponents,
}) => setPreBodyComponents([<ColorSchemeDetector />]);

/**
 * Detects the initial color scheme preference of the user and stores it and CSS
 * custom properties to be accessed by other scripts.
 *
 * This allows for the color scheme and theme to be set before the initial
 * render of a React component, preventing a flash of an incorrect theme and
 * other issues caused by static site generation.
 */
function ColorSchemeDetector() {
  const detectColorScheme = `
  (function() {
    function getColorScheme() {
      const storedScheme = window.localStorage.getItem('colorScheme');

      if (storedScheme === 'light' || storedScheme === 'dark') {
        return storedScheme;
      }

      const query = window.matchMedia('(prefers-color-scheme: light)');
      return query.matches ? 'light' : 'dark';
    }

    const scheme = getColorScheme();
    localStorage.setItem('colorScheme', scheme);
    const root = document.documentElement;

    root.style.setProperty(
      '--color-base',
      scheme === 'light'
        ? '#fff'
        : '#000'
    );

    root.style.setProperty(
      '--color-contrast',
      scheme === 'light'
        ? '#000'
        : '#fff'
    );
  })()`;

  return <script dangerouslySetInnerHTML={{ __html: detectColorScheme }} />;
}
