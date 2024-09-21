import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

export default interface ProjectDescriptionProps {
  readonly children: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}
