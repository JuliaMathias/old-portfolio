const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`]
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.js`);

  const res = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { category: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const projects = res.data.allMdx.edges;

  projects.forEach((post, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next
      }
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.js`);

  const res = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const projects = res.data.allMdx.edges;

  projects.forEach((post, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next
      }
    });
  });
};
