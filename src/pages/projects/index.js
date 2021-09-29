import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Text, Box, IconButton, Button } from "@chakra-ui/react"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"

export default function Projects({ data }) {
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
              boxShadow="lg"
              borderRadius="md"
              _hover={{
                transform: "translateY(-10px)",
                transition: "0.4s",
              }}
            >
              <Box flex="1">
                <GatsbyImage image={getImage(project.frontmatter.thumb)} />
              </Box>
              <Box flex="1" p={2} position="relative">
                <Link to={project.frontmatter.slug}>
                  <Text
                    fontSize="4xl"
                    bgGradient="linear(to-r, #4299E1,#5F87D9)"
                    bgClip="text"
                  >
                    {project.frontmatter.title}
                  </Text>
                  <Text fontSize="2xl">{project.frontmatter.stack}</Text>
                  <Link
                    to={"/projects/" + project.frontmatter.slug}
                    key={project.id}
                  >
                    <Flex alignItems="center" position="absolute" bottom="0">
                      <Text
                        fontSize="3xl"
                        bottom="0"
                        _hover={{
                          color:"blue.400",
                          transition: "color 0.4s",
                        }}
                      >
                        Read More
                      </Text>
                      <FaChevronRight fontSize="2rem"
                        _hover={{
                          color:"blue.400",
                          transition: "color 0.4s",
                        }}
                      />
                    </Flex>
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
  query ProjectQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
    ) {
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
