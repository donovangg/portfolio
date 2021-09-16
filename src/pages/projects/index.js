import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Text, Box } from "@chakra-ui/react"

export default function Projects({ data }) {
  console.log(data)

  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Box width="90%" m="auto">
        <Text textAlign="center" fontSize="7xl">Projects</Text>
      </Box>
      <Flex
        margin="auto"
        justifyContent="space-around"
        flexWrap="wrap"
        width="90%"
      >
        {projects.map(project => (
          <Box
            width="24rem"
            height="24rem"
            m={2}
          >
            <Flex flexDir="column"  height="100%" width="100%" _hover={{  boxShadow:"lg",transform:"translateY(-10px)", transition:"0.4s"}}>
            <Box flex="1">
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                />
              </Box>
              <Box  flex="1" p={2}  position="relative">
                <Text fontSize="4xl">{project.frontmatter.title}</Text>
                <Text fontSize="2xl">{project.frontmatter.stack}</Text>
                <Link to={project.frontmatter.slug}>
                  <Text fontSize="3xl" position="absolute" bottom="0"
                   _hover={{ textDecoration:"underline", transition:"textDecoration 0.4s"}}
                  >
                  Read More
                  </Text>
                  </Link>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Layout>
  )
}

// export page query
export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(transformOptions: {fit: COVER})
          }
        }
      }
    }
  }
}

`
