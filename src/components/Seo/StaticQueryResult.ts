export default interface StaticQueryResult {
  readonly site: {
    readonly siteMetadata: {
      readonly author: string;
      readonly description: string;
      readonly title: string;
    };
  };
}
