import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Text, Box, IconButton, Button} from "@chakra-ui/react"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Flex minH="100vh" flexDir="column">
        <Box width="90%" m="auto">
          <Text
            textAlign="center"
            bgGradient="linear(to-r, #4299E1,#5F87D9)"
            bgClip="text"
            fontSize={["6xl", "6xl", "8xl"]}
            fontWeight="extrabold"
            my={12}
          >
            Projects
          </Text>
        </Box>
        <Flex
          margin="auto"
          width="90%"
          border="2px"
          borderColor="green.200"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          {projects.map(project => (
            <Flex
              as="article"
              my={6}
              height="100%"
              width="100%"
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
              maxWidth="1520px"
              flexDir={['column', 'column', 'column', 'row']}
            >
              <Box flex="1">
                <GatsbyImage
                  borderRadius="lg"
                  image={getImage(project.frontmatter.thumb)}
                />
              </Box>
              <Box flex="1" p={3} position="relative">
                <Text
                  as="h2"
                  fontSize="5xl"
                  bgGradient="linear(to-r, #4299E1,#5F87D9)"
                  bgClip="text"
                  fontWeight="semibold"
                >
                  {project.frontmatter.title}
                </Text>
                <Text as="h3" fontSize="2xl">{project.frontmatter.stack}</Text>
                <Text as="p">  {project.frontmatter.description} </Text>
                <Link
                  to={"/projects/" + project.frontmatter.slug}
                  key={project.id}
                >
                  <Flex alignItems="center" border="2px">
                      <a href={project.frontmatter.repo} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        Live
                      </Link>
                  </Flex>
                </Link>
              </Box>
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
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
          link
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
