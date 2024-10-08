import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from './Container';
import Props from './Props';

export default function LayoutFooterSocialLink(props: Props) {
  return (
    <Container hideIcon hoverColor={props.hoverColor} href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </Container>
  );
}
