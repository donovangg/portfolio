const path = require('path');

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const projects  = await graphql(`
  query Projects {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "project"}}}) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allMarkdownRemark.nodes.forEach(result => {
      createPage({
        path: '/projects/' + result.frontmatter.slug,
        component: path.resolve('./src/templates/project-details.js'),
        context: { slug: result.frontmatter.slug }
    });
    });
  })  
}