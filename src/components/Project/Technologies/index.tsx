import Heading from './Heading';
import List from './List';
import Props from './Props';

export default function ProjectTechnologies(props: Props) {
  const listItems = props.technologies.map((technology) => (
    <li key={technology}>{technology}</li>
  ));

  return (
    <div>
      <Heading />
      <List>{listItems}</List>
    </div>
  );
}
