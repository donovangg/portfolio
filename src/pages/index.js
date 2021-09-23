import React from "react"
import { Flex, Text, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home() {
  return (
    <Layout>
      <Flex height="90vh" justifyContent="center" alignItems="center">
        <Flex
          m={0}
          flexDir="column"
          textAlign={["center", "center", "left", "left"]}
        >
          <Heading fontSize="8xl" as="h1" mx={0} px={0}>
            Hi I'm{" "}
            <Heading
              as="h1"
              bgGradient="linear(to-r, #4299E1,#5F87D9)"
              bgClip="text"
              fontSize={['6xl', '6xl', '8xl']}
              fontWeight="extrabold"
              display="inline"
            >
              Donovan!
            </Heading>
          </Heading>
          <Heading fontSize="4xl">
            I'm a{" "}
            <Heading
              display="inline"
              bgGradient="linear(to-r, #4299E1,#5F87D9)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              Frontend developer
            </Heading>{" "}
            making things on the internet.
          </Heading>
          <AniLink cover to="/projects">
            <Text
              color="blue.400"
             textDecor="underline"
              fontSize="4xl"
              textDecor="underline"
            >
              Check out my work!
            </Text>
          </AniLink>
        </Flex>
      </Flex>
    </Layout>
  )
}
