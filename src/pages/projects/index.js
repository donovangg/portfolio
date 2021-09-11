import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

export default function Projects({ data }) {
    console.log(data)
    const projects = data.allMarkdownRemark.nodes;
    return (
        <Layout>
            <div>
                {projects.map((project) => (
                    <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
                        <div>
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                        </Link>
                ))}
            </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }  
`;