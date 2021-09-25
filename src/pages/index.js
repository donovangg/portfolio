import React from "react"
import {
  Flex,
  Text,
  Heading,
  useColorModeValue,
  Button,
} from "@chakra-ui/react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home() {
  const headingText = useColorModeValue("gray.800", "gray.50")
  return (
    <Layout>
      <Flex height="90vh" justifyContent="center" alignItems="center">
        <Flex
          m={0}
          flexDir="column"
          textAlign={["center", "center", "left", "left"]}
        >
          <Heading
            fontSize={["6xl", "6xl", "8xl"]}
            color={headingText}
            as="h1"
            mx={0}
            px={0}
          >
            Hi I'm{" "}
            <Heading
              as="h1"
              bgGradient="linear(to-r, #4299E1,#5F87D9)"
              bgClip="text"
              fontSize={["6xl", "6xl", "8xl"]}
              fontWeight="extrabold"
              display="inline"
            >
              Donovan!
            </Heading>
          </Heading>
          <Heading fontSize="4xl" color={headingText}>
            I'm a{" "}
            <Heading
              display="inline"
              bgGradient="linear(to-r, #4299E1,#5F87D9)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              Frontend dev
            </Heading>{" "}
            making things on the internet.
          </Heading>
          <AniLink cover to="/projects">
            <Button
              mt={6}
              p={8}
              variant="outline"
              colorScheme="blue"
              fontSize="2xl"
              _hover={{
                backgroundColor: "blue.400",
                color: "white",
                transition: "0.3s",
              }}
            >
              Check out my work!
            </Button>
          </AniLink>
        </Flex>
      </Flex>
    </Layout>
  )
}
