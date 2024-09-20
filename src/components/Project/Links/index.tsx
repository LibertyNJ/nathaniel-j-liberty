import React from 'react';

import Button from '../../Button';
import Grid from '../../Grid';
import Props from './Props';

export default function ProjectLinks(props: Props) {
  const links = props.links.map((link) => (
    <Button
      href={link.href}
      icon={assignIcon(link.text)}
      key={link.href}
      size="small"
    >
      {link.text}
    </Button>
  ));

  return <Grid columns={1}>{links}</Grid>;
}

function assignIcon(text: string) {
  const lowerCaseText = text.toLowerCase();

  if (lowerCaseText.includes('code')) {
    return ['fab', 'github'] as ['fab', 'github'];
  }

  if (lowerCaseText.includes('visit')) {
    return 'globe';
  }

  if (lowerCaseText.includes('try')) {
    return 'desktop';
  }

  return undefined;
}
