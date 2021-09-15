import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
 
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div>
        {projects.map(project => (
          <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
            <div>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
              <GatsbyImage image={getImage(project.frontmatter.thumb)}  />
              {project.frontmatter.date} 
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
query ProjectPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}

`
