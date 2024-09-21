import Container from './Container';
import Description from './Description';
import Header from './Header';
import Image from './Image';
import Links from './Links';
import Props from './Props';
import Technologies from './Technologies';

export default function Project(props: Props) {
  return (
    <Container>
      <Header subtitle={props.subtitle} title={props.title} />
      <div>
        <Image alt={props.image.alt} image={props.image.gatsbyImageData} />
        <Links links={props.links} />
        <Technologies technologies={props.technologies} />
      </div>
      <div>
        <Description>{props.description}</Description>
      </div>
    </Container>
  );
}
