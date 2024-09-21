import Container from './Container';
import Heading from './Heading';
import Props from './Props';

export default function HeadedList(props: Props) {
  return (
    <Container>
      <Heading>{props.heading}</Heading>
      <ul>{props.children}</ul>
    </Container>
  );
}
