import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Container from './Container';
import Props from './Props';

export default function ProjectDescription(props: Props) {
  return <Container>{renderRichText(props.children)}</Container>;
}
