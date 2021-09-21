import React from 'react'
import Layout from '../components/Layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, thumb } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div>
                <h2>Title</h2>
                <h4>Stack</h4>
                <GatsbyImage image={getImage(data.markdownRemark.frontmatter.thumb.childImageSharp.gatsbyImageData)} />
            </div>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  
`;