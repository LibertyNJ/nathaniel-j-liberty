import { IGatsbyImageData } from 'gatsby-plugin-image';

export default interface ProjectProps {
  readonly description: {
    readonly raw: string;
  };
  readonly image: {
    readonly alt: string;
    readonly gatsbyImageData: IGatsbyImageData;
  };
  readonly links: readonly {
    readonly href: string;
    readonly text: string;
  }[];
  readonly subtitle: string;
  readonly technologies: readonly string[];
  readonly title: string;
}
