import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Flex, Text, Box, IconButton } from "@chakra-ui/react"

export default function Blog( {data} ) {
    console.log(data)
    const blogPosts = data.allMarkdownRemark.nodes
    return (
        <Layout>
            Blog page
            <h2>Writers Block :'(</h2>
            {blogPosts.map((blog) => (
                <h2>{blog.frontmatter.title}</h2>
            ))}
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "blog"}}}) {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
  
`;