import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Box,
  Heading,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"

export default function about() {
  return (
    <Layout>
      <Flex
        flexDirection={["column", "column", "row", "row"]} 
        minH="100vh"
      >
        <Flex flex="1" m={2} flexDir="column">
          <Text
            fontSize="6xl"
            bgGradient="linear(to-r, #4299E1,#5F87D9)"
            bgClip="text"
            fontWeight="extrabold"
            mt={5}
            py={6}
          >
            Hi I'm Donovan!
          </Text>
          <Text fontSize="3xl">
            I'm a frontend developer born and raised in Los Angeles{" "}
          </Text>
          <StaticImage src="../images/portfolio-pic.png" />
        </Flex>
        <Flex flex="1" m={2}  flexDir="column">
          <Text
            fontSize="7xl"
            textAlign="center"
            bgGradient="linear(to-r, #4299E1,#5F87D9)"
            bgClip="text"
            fontWeight="extrabold"
            py={6}
          >
            About
          </Text>
          <Text fontSize="xl" my={2}>
            I first started learning web development two years ago just to make
            funny things for my friends. Learning new technologies to make those
            things is what I find enjoyable about web development.
          </Text>
          <Text fontSize="xl" my={2}>
            Learning new things on the internet is so easy nowadays so I try and
            keep up on <a href="#">CSS Tricks</a>, <a href="#">Syntax.fm</a> and
            many YouTube videos. If you're curious hit me up on{" "}
            <a href="#">Twitter</a> and I've got some good recommendations.
          </Text>
          <Text fontSize="xl">
            When I'm trying to give my eyes a break I'll go and try to
            skateboard. It definitely doesn't come easy anymore but I think it
            helps with coding. Spending hours on a trick is almost like working
            on a bug.
          </Text>
        </Flex>
        <Flex flex="1" m={2}  flexDir="column">
          <Text
            fontSize="7xl"
            textAlign="center"
            bgGradient="linear(to-r, #4299E1,#5F87D9)"
            bgClip="text"
            fontWeight="extrabold"
            py={6}
          >
            The Tech
          </Text>
          <Text fontSize="xl" my={2}>
            If you'd like to see some projects I've worked on check the{" "}
            <Link to="/projects">projects</Link> section. My <Link>Blog</Link>{" "}
            is where you can see my thoughts on why and how I feel about the
            tech stack I chose.
          </Text>

          <Text fontSize="xl">Some tech I've worked with: </Text>
          <UnorderedList>
            <ListItem>HTML / CSS / JavaScript</ListItem>
            <ListItem>ReactJS</ListItem>
            <ListItem>GatsbyJS</ListItem>
            <ListItem>Chakra UI / TailwindCSS</ListItem>
            <ListItem>
              <a href="#">GitHub</a> for my repos
            </ListItem>
            <ListItem>Figma to put down my ideas</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Layout>
  )
}
