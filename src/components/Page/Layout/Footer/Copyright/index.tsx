import Container from './Container';
import Props from './Props';

export default function Copyright(props: Props) {
  return (
    <Container>
      <small>
        © {props.holder} {props.initialYear}
        {props.currentYear > props.initialYear && `–${props.currentYear}`}
      </small>
    </Container>
  );
}
