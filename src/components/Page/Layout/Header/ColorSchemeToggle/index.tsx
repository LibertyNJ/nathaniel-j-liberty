import { useState } from 'react';

import Container from './Container';
import InnerTrack from './InnerTrack';
import Input from './Input';
import Label from './Label';
import Props from './Props';
import Thumb from './Thumb';
import Track from './Track';
import Icon from '../../../../Icon';

export default function ColorSchemeToggle(props: Props) {
  const { colorScheme, label, onToggle } = props;
  const [wasEnabled, setWasEnabled] = useState(false);
  const isEnabled = colorScheme !== null;

  if (!wasEnabled && isEnabled) {
    setTimeout(() => setWasEnabled(true));
  }

  return (
    <Container $isEnabled={isEnabled}>
      <Track>
        <Label>{label}</Label>
        <InnerTrack>
          <Icon icon="sun" />
          <Icon icon="moon" />
        </InnerTrack>
        <Input
          checked={colorScheme === 'dark'}
          disabled={!isEnabled}
          onChange={onToggle}
          type="checkbox"
        />
        <Thumb $wasEnabled={wasEnabled} />
      </Track>
    </Container>
  );
}
