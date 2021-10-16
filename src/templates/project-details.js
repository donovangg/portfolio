import React from "react"
import Layout from "../components/Layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { Flex, Text, Heading, Box, IconButton } from "@chakra-ui/react"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft"
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, thumb, link, repo } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Flex flexDir="column" width="90%" height="100%" m="auto">
        <Link to="/projects">
          <Flex alignItems="center">
          <IconButton icon={<FaChevronLeft />} fontSize="3xl" variant="unstyled" m={0} padding={0} />
          <Text display="inline-block" fontSize="2xl">Back</Text>
          </Flex>
          </Link>
        <Heading color="blue.400" textAlign={['center', 'center', 'left', 'left']} fontSize="8xl">
          {title}
        </Heading>
        <Text fontSize="2xl" textAlign={['center', 'center', 'left', 'left']} >Stack: {stack}</Text>
        <Flex justifyContent={['center', 'center', 'flex-start', 'flex-start']}>
          <a href={repo} fontSize="2xl">
            <IconButton icon={<FaGithub />} fontSize="2xl"  variant="none"/>
          </a>
          <a href={link}>
            <IconButton icon={<FaExternalLinkAlt />}  fontSize="2xl"variant="none" />
          </a>
        </Flex>
        <div
          className={styles.details}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Box m="auto">
          <GatsbyImage
            image={getImage(
              data.markdownRemark.frontmatter.thumb.childImageSharp
                .gatsbyImageData
            )}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        link
        repo
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
