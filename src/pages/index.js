import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Flex height="90vh" justifyContent="center" alignItems="center">
        <Flex
          m={0}
          flexDir="column"
          textAlign={["center", "center", "left", "left"]}
        >
          <Text fontSize="8xl" mx={0} px={0}>
            Hi I'm{" "}
            <Text
              bgGradient="linear(to-l, #ED64A6,#B36FCC)"
              bgClip="text"
              fontSize="8xl"
              fontWeight="extrabold"
              display="inline"
            >
              Donovan!
            </Text>
          </Text>
          <Text fontSize="4xl">
            I'm a{" "}
            <Text  display="inline" 
             bgGradient="linear(to-l, #ED64A6,#B36FCC)"
             bgClip="text"
             fontSize="4xl"
             fontWeight="extrabold"
            >
              Frontend developer
            </Text>{" "}
            making the internet fun
          </Text>
          <Link textDecoration="underline" to="/portfolio">
            <Text bgGradient="linear(to-l, #ED64A6,#B36FCC)"
              bgClip="text"
              fontSize="3xl"
              textDecoration="underline"
              fontWeight="extrabold" fontSize="3xl">Check out my work!</Text>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  )
}
