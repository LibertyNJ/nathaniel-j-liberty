import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from './Container';
import Props from './Props';

export default function ListToggle(props: Props) {
  return (
    <Container onClick={props.onClick}>
      <FontAwesomeIcon icon={props.listIsShown ? 'times' : 'bars'} />
    </Container>
  );
}
