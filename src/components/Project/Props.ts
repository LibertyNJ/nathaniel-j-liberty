import { IGatsbyImageData } from 'gatsby-plugin-image';

export default interface ProjectProps {
  readonly description: {
    readonly raw: string;
  };
  readonly image: {
    readonly alt: string;
    readonly gatsbyImageData: IGatsbyImageData;
  };
  readonly links: {
    readonly href: string;
    readonly text: string;
  }[];
  readonly subtitle: string;
  readonly technologies: string[];
  readonly title: string;
}
