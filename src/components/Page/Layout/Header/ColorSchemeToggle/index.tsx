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

  return (
    <Container>
      <Track>
        <Label>{label}</Label>
        <InnerTrack>
          <Icon icon="sun" />
          <Icon icon="moon" />
        </InnerTrack>
        <Input
          checked={colorScheme === 'dark'}
          onChange={onToggle}
          type="checkbox"
        />
        <Thumb />
      </Track>
    </Container>
  );
}
