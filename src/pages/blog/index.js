import React from "react"
import Layout from "../../components/Layout"
import { Flex, Text, Box, IconButton } from "@chakra-ui/react"

export default function Blog({ data }) {
  return (
    <Layout>
      <Box height="95vh">
          The Blog has moved to  <a href="https://blog.donovangomez.com/" target="_blank">Hashnode!!</a>
      </Box>
    </Layout>
  )
}

