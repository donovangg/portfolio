import { graphql } from "gatsby"
import { Link as GatsbyLink } from "gatsby"
import { Link as ChakraLink } from "@chakra-ui/react"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Text, Box, IconButton, Button } from "@chakra-ui/react"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Flex minH="100vh" flexDir="column" paddingBottom="15rem">
        <Box width="90%" m="auto">
          <Text
            textAlign="center"
            bgGradient="linear(to-r, #4299E1,#5F87D9)"
            bgClip="text"
            fontSize={["6xl", "6xl", "8xl"]}
            fontWeight="extrabold"
            my={12}
            paddingBottom="5rem"
          >
            Projects
          </Text>
        </Box>
        <Flex
          margin="auto"
          width="90%"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          {projects.map(project => (
            <Flex
              as="article"
              my={14}
              height="100%"
              width="100%"
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
              maxWidth="1520px"
              flexDir={["column", "column", "column", "row"]}
              key={project.id}
            >
              <Box flex="1">
                <GatsbyImage
                  borderRadius="lg"
                  image={getImage(project.frontmatter.thumb)}
                />
              </Box>
              <Flex
                flexDir="column"
                justifyContent="space-around"
                flex="1"
                position="relative"
                ml={4}
              >
                <Text
                  as="h2"
                  fontSize="5xl"
                  bgGradient="linear(to-r, #4299E1,#5F87D9)"
                  bgClip="text"
                  fontWeight="semibold"
                  p={["5", "4", "2", "1"]}
                >
                  {project.frontmatter.title}
                </Text>
                <Text as="h3" fontSize="2xl" p={["5", "4", "2", "1"]}>
                  {project.frontmatter.stack}
                </Text>
                <Text as="p" p={["5", "4", "0", "1"]}>
                  {" "}
                  {project.frontmatter.description}{" "}
                </Text>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="50%"
                >
                  <ChakraLink
                    href={project.frontmatter.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      leftIcon={<FaGithub />}
                      backgroundColor="blue.400"
                      variant="solid"
                    >
                      Repo
                    </Button>
                  </ChakraLink>
                  <ChakraLink
                    href={project.frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Live</Button>
                  </ChakraLink>
                  <GatsbyLink to={"/projects/" + project.frontmatter.slug}>
                    <Button>Details</Button>
                  </GatsbyLink>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          link
          date
          repo
          description
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
