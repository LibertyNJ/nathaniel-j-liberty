import { Link } from 'gatsby';

import ExternalLink from '../ExternalLink';
import Container from './Container';
import Icon from './Icon';
import Props from './Props';

export default function Button(props: Props) {
  if (props.download) {
    return (
      <Container
        as={ExternalLink}
        href={props.href}
        size={props.size}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.icon && <Icon icon={props.icon} />}
        {props.children}
      </Container>
    );
  }

  if (props.href) {
    return (
      <Container
        as={ExternalLink}
        size={props.size}
        href={props.href}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.icon && <Icon icon={props.icon} />}
        {props.children}
      </Container>
    );
  }

  if (props.to) {
    return (
      <Container
        as={Link}
        size={props.size}
        to={props.to}
        unlimitedWidth={props.unlimitedWidth}
      >
        {props.icon && <Icon icon={props.icon} />}
        {props.children}
      </Container>
    );
  }

  return (
    <Container size={props.size} unlimitedWidth={props.unlimitedWidth}>
      {props.icon && <Icon icon={props.icon} />}
      {props.children}
    </Container>
  );
}
