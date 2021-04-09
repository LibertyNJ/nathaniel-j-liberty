export default interface SEOProps {
  readonly description?: string;
  readonly lang?: string;
  readonly meta?: Metadata[];
  readonly title: string;
}

type Metadata =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined };
