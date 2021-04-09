import React from 'react';

import InnerContainer from './InnerContainer';
import OuterContainer from './OuterContainer';
import Props from './Props';

export default function PageLayoutMain(props: Props) {
  return (
    <OuterContainer display={props.display}>
      <InnerContainer
        breakpoints={props.breakpoints}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.children}
      </InnerContainer>
    </OuterContainer>
  );
}
