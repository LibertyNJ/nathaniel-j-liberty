import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import GlobalStyle from './GlobalStyle';
import './icon-library';
import Layout from './Layout';
import Props from './Props';
import StarCanvas from './StarCanvas';
import { ColorScheme, darkTheme, lightTheme } from '../../style/color';
import { ThemeProvider } from 'styled-components';

fontAwesomeConfig.autoAddCss = false;

export default function Page(props: Props) {
  const [colorScheme, setColorScheme] = useState(getColorScheme());
  useEffect(() => listenForColorSchemeChanges(setColorScheme), []);
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

function getColorScheme(): ColorScheme {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function listenForColorSchemeChanges(
  setColorScheme: Dispatch<SetStateAction<ColorScheme>>
) {
  const query = window.matchMedia('(prefers-color-scheme: light)');
  const handleChange = (event: MediaQueryListEvent) => {
    setColorScheme(event.matches ? 'light' : 'dark');
  };
  query.addEventListener('change', handleChange);
  return () => query.removeEventListener('change', handleChange);
}
