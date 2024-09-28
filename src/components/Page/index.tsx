import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';

import GlobalStyle from './GlobalStyle';
import './icon-library';
import Layout from './Layout';
import Props from './Props';
import StarCanvas from './StarCanvas';
import { ColorScheme, darkTheme, lightTheme } from '../../style/color';
import { getInitialColorScheme } from '../../utils/getInitialColorScheme';

fontAwesomeConfig.autoAddCss = false;

export default function Page(props: Props) {
  const [colorScheme, setColorScheme] = useState<ColorScheme | null>(null);

  const setGlobalColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement;

    root.style.setProperty(
      '--color-base',
      scheme === 'light' ? lightTheme.base : darkTheme.base
    );

    root.style.setProperty(
      '--color-contrast',
      scheme === 'light' ? lightTheme.contrast : darkTheme.contrast
    );

    root.style.setProperty(
      '--color-shroud',
      scheme === 'light' ? '255, 255, 255' : '0, 0, 0'
    );

    localStorage.setItem('colorScheme', scheme);
    setColorScheme(scheme);
  };

  useEffect(() => setInitialColorScheme(setGlobalColorScheme), []);
  useEffect(() => listenForColorSchemeChange(setGlobalColorScheme), []);

  return (
    <>
      <GlobalStyle />
      <StarCanvas
        coveredElementSelector="body"
        twinkle={props.twinkle}
        shroud={props.shroud}
      />
      <Layout
        breakpoints={props.breakpoints}
        colorScheme={colorScheme}
        mainDisplay={props.display}
        setColorScheme={setGlobalColorScheme}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.children}
      </Layout>
    </>
  );
}

function setInitialColorScheme(
  setColorScheme: (colorScheme: ColorScheme) => void
) {
  const scheme = getInitialColorScheme();
  setColorScheme(scheme);
}

function listenForColorSchemeChange(
  setColorScheme: (colorScheme: ColorScheme) => void
) {
  const query = window.matchMedia('(prefers-color-scheme: light)');

  const handleChange = (event: MediaQueryListEvent) => {
    const scheme = event.matches ? 'light' : 'dark';
    setColorScheme(scheme);
  };

  query.addEventListener('change', handleChange);
  return () => query.removeEventListener('change', handleChange);
}
