import React from "react"
import { graphql } from "gatsby"

export default function blogDetails({ data }) {
  const { html } = data.markdownRemark

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}

export const query = graphql`
  query BlogQuery {
    markdownRemark(frontmatter: { category: { eq: "blog" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
