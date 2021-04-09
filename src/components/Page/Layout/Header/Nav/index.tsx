import React from 'react';

import List from './List';
import ListToggle from './ListToggle';
import Props from './Props';

export default function LayoutHeaderNav(props: Props) {
  return (
    <nav>
      <ListToggle listIsShown={props.listIsShown} onClick={props.toggleList} />
      <List isHiding={props.listIsHiding} isShown={props.listIsShown} />
    </nav>
  );
}
