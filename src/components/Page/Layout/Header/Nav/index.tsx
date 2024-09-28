import Container from './Container';
import List from './List';
import ListToggle from './ListToggle';
import Props from './Props';

export default function LayoutHeaderNav(props: Props) {
  return (
    <Container>
      <ListToggle listIsShown={props.listIsShown} onClick={props.toggleList} />
      <List isHiding={props.listIsHiding} isShown={props.listIsShown} />
    </Container>
  );
}
