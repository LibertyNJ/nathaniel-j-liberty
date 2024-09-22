import Icon from '../Icon';
import Container from './Container';
import Props from './Props';

export default function ExternalLink(props: Props) {
  return (
    <Container
      className={props.className}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
      {props.hideIcon || <Icon icon="arrow-up-right-from-square" $marginLeft />}
    </Container>
  );
}
