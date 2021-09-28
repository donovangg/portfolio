import React from 'react'
import { graphql } from "gatsby"


export default function blogDetails() {
    const { html } = data.markdownRemark
    const { title } = data.markdownRemark.frontmatter
    return (
        <div>
            <h2>Yeet</h2>
        </div>
    )
}

export const query = graphql`
query BlogQuery {
    markdownRemark(frontmatter: {category: {eq: "blog"}}) {
      html
      frontmatter {
        title
      }
    }
  }
  
`