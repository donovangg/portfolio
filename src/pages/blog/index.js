import React from 'react'
import { graphql, Link } from 'gatsby'
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
              <div>
                <h2>{blog.frontmatter.title}</h2>
                <Link to={blog.frontmatter.slug}>
                <Text>yeet</Text>
                </Link>
                </div>
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