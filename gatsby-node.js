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
    result.data.allMarkdownRemark.nodes.forEach(({ node }) => {
      createPage({
        path: '/projects/' + node.frontmatter.slug,
        component: path.resolve('./src/templates/project-details.js'),
        context: { slug: node.frontmatter.slug }
    });
    });
  })  

  // create another query for the blog page
  const  blogs  = await graphql(`
  query Blog {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `).then(result => {
    result.data.allMarkdownRemark.nodes.forEach(({ node }) => {
      createPage({
        path: '/blog/' + node.frontmatter.slug,
        component: path.resolve('./src/templates/blog-details.js'),
        context: { slug: node.frontmatter.slug }
    });
    });
  });
}
//   projects.data.allMarkdownRemark.nodes.forEach(node => {
//       actions.createPage({
//           path: '/projects/' + node.frontmatter.slug,
//           component: path.resolve('./src/templates/project-details.js'),
//           context: { slug: node.frontmatter.slug }
//       })
//   })

//    blogs.data.allMarkdownRemark.nodes.forEach(node => {
//     actions.createPage({
//       path: '/blog/' + node.frontmatter.slug,
//       component: path.resolve('./src/templates/blog-details.js'),
//       context: { slug: node.frontmatter.slug }
//   })
//    })
// }