import React from 'react';

import Heading from './Heading';
import List from './List';
import Props from './Props';

export default function ProjectTechnologies(props: Props) {
  const listItems = props.technologies.map((technology) => (
    <li>{technology}</li>
  ));

  return (
    <div>
      <Heading />
      <List>{listItems}</List>
    </div>
  );
}
