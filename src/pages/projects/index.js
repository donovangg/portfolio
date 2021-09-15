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
      <Flex
        border="2px"
        margin="auto"
        justifyContent="space-around"
        width="90%"
        borderColor="red.400"
      >
        {projects.map(project => (
          <Box
            border="2px"
            width="22rem"
            borderColor="blue.400"
            justifyContent="center"
          >
            <Link to={"/projects" + project.frontmatter.slug} key={project.id}>
              <Flex flexDir="column" border="2px" height="100%" width="100%">
                <Box flex="1">
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </Box>
                <Box flex="1">
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumb)}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Flex>
            </Link>
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
