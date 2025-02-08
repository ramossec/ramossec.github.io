import { GatsbyNode, CreatePagesArgs, PluginOptions } from "gatsby"
import { GraphQLSchema } from "graphql"

// Definindo o tipo para os dados retornados pela consulta
interface MarkdownRemarkNode {
  frontmatter: {
    title: string;
    slug: string; // Added 'slug' property
  };
}

interface GraphQLError {
  // Add properties for GraphQLError as needed
}

interface GraphQLResult {
  data?: any;
  errors?: GraphQLError[];
}

const path = require('path');

export const createPages: GatsbyNode['createPages'] = async function createPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;

  const result: GraphQLResult = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node: MarkdownRemarkNode) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`, // Use the slug for the path
      component: path.resolve('./src/templates/blogTemplate.tsx'), // Path to your template
      context: {
        slug: node.frontmatter.slug, // Pass the slug to the template
      },
    });
  });
};