import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import { Flex, Text, Box, IconButton } from "@chakra-ui/react"

export default function Blog({ data }) {
  console.log(data)
  const blogPosts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Box height="95vh">
        <Flex flexDir="column" width="90%" m="auto" justifyContent="center">
        <Text fontSize="8xl" textAlign="center">Blog</Text>
        <Flex border="2px" justifyContent="center" alignItems="center" flexDir="column">
        {blogPosts.map(blog => (
          <Flex flexDir="column" boxShadow="md" p={4} minW="30rem">
            <Text fontSize="4xl">{blog.frontmatter.title}</Text>
            <Link to={blog.frontmatter.slug}>
              <Text>Read On</Text>
            </Link>
          </Flex>
        ))}
        </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`
