import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Text, Box, IconButton } from "@chakra-ui/react"

export default function Projects({ data }) {
  console.log(data)

  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Box width="90%" m="auto">
        <Text
          textAlign="center"
          bgGradient="linear(to-r, #4299E1,#5F87D9)"
          bgClip="text"
          fontSize={["6xl", "6xl", "8xl"]}
          fontWeight="extrabold"
        >
          Projects
        </Text>
      </Box>
      <Flex
        margin="auto"
        justifyContent="space-around"
        flexWrap="wrap"
        width="90%"
      >
        {projects.map(project => (
          <Box width="24rem" height="24rem" m={2}>
            <Flex
              flexDir="column"
              height="100%"
              width="100%"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-10px)",
                transition: "0.4s",
              }}
            >
              <Box flex="1">
                <GatsbyImage image={getImage(project.frontmatter.thumb)} />
              </Box>
              <Box flex="1" p={2} position="relative">
                <Link to={project.frontmatter.slug}>
                  <Text fontSize="4xl">{project.frontmatter.title}</Text>
                  <Text fontSize="2xl">{project.frontmatter.stack}</Text>
                  <Link
                    to={"/projects/" + project.frontmatter.slug}
                    key={project.id}
                  >
                    <Text
                      fontSize="3xl"
                      position="absolute"
                      bottom="0"
                      _hover={{
                        textDecoration: "underline",
                        transition: "textDecoration 0.4s",
                      }}
                    >
                      Read More
                    </Text>
                  </Link>
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
          link
          repo
          thumb {
            childImageSharp {
              gatsbyImageData(transformOptions: { fit: COVER })
            }
          }
        }
      }
    }
  }
`
