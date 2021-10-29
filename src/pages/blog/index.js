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
          The Blog has moved to  <a href="https://blog.donovangomez.com/" target="_blank">Hashnode!!</a>
      </Box>
    </Layout>
  )
}

