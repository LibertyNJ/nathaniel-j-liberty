import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

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
  useEffect(() => setInitialColorScheme(setColorScheme), []);
  useEffect(() => listenForColorSchemeChange(setColorScheme), []);

  return (
    <>
      <GlobalStyle />
      <StarCanvas
        colorScheme={colorScheme}
        coveredElementSelector="body"
        twinkle={props.twinkle}
        shroud={props.shroud}
      />
      <Layout
        breakpoints={props.breakpoints}
        mainDisplay={props.display}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.children}
      </Layout>
    </>
  );
}

function setInitialColorScheme(
  setColorScheme: Dispatch<SetStateAction<ColorScheme | null>>
) {
  const scheme = getInitialColorScheme();
  setColorScheme(scheme);
}

function listenForColorSchemeChange(
  setColorScheme: Dispatch<SetStateAction<ColorScheme | null>>
) {
  const query = window.matchMedia('(prefers-color-scheme: light)');

  const handleChange = (event: MediaQueryListEvent) => {
    const scheme = event.matches ? 'light' : 'dark';
    const root = document.documentElement;
    
    root.style.setProperty(
      '--color-base',
      scheme === 'light' ? lightTheme.base : darkTheme.base
    );
    
    root.style.setProperty(
      '--color-contrast',
      scheme === 'light' ? lightTheme.contrast : darkTheme.contrast
    );
    
    localStorage.setItem('colorScheme', scheme);
    setColorScheme(scheme);
  };

  query.addEventListener('change', handleChange);
  return () => query.removeEventListener('change', handleChange);
}
