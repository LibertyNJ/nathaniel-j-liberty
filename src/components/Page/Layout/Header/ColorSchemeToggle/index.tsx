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
  const [thumbIsEnabled, setThumbIsEnabled] = useState(false);
  const isEnabled = colorScheme !== null;

  const handleChange = () => {
    setThumbIsEnabled(true);
    onToggle();
  };

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
          onChange={handleChange}
          type="checkbox"
        />
        <Thumb $isEnabled={thumbIsEnabled} />
      </Track>
    </Container>
  );
}
