import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import GlobalStyle from './GlobalStyle';
import './icon-library';
import Layout from './Layout';
import Props from './Props';
import StarCanvas from './StarCanvas';

fontAwesomeConfig.autoAddCss = false;

export default function Page(props: Props) {
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
        mainDisplay={props.display}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.children}
      </Layout>
    </>
  );
}
