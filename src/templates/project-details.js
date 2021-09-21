import React from 'react'
import Layout from '../components/Layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Flex, Text, Heading, Box } from "@chakra-ui/react"

export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, thumb } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Flex flexDir="column" width="90%" m="auto" border="2px">
                <Heading as="h2" fontsize="8xl">{title}</Heading>
                <Text fontSize="xl">Stack: {stack}</Text>
                <div dangerouslySetInnerHTML={{__html: html}} fontSize="xl" />
                <Box>
                <GatsbyImage image={getImage(data.markdownRemark.frontmatter.thumb.childImageSharp.gatsbyImageData)} />
               </Box>
            </Flex>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  
`;