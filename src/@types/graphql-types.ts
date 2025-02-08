declare module '@types/graphql-types' {
  // Add your type definitions here
  export type MarkdownRemark = {
    // Define properties
    html: string;
    frontmatter: {
      title: string;
      date: string;
      path: string;
    };
  };
}