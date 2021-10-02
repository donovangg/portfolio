import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/blog-details.module.css"

export default function blogDetails({ data }) {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <div className={styles.blog}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const query = graphql`
query BlogPost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        link
      }
    }
  }
`
