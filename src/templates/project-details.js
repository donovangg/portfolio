import React from 'react'
import Layout from '../components/Layout'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Flex, Text, Heading, Box } from "@chakra-ui/react"
import * as styles from '../styles/project-details.module.css'



export default function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, thumb } = data.markdownRemark.frontmatter

    return (
        <Layout>
            <Flex flexDir="column" width="90%" height="100%" m="auto">
                <Heading color="blue.400" fontSize="8xl">{title}</Heading>
                <Text fontSize="2xl">Stack: {stack}</Text>
                <Flex justifyContent="center">
                <div className={styles.details} dangerouslySetInnerHTML={{__html: html}}  />
                </Flex>
                <Box width="50rem" m="auto">
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