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
              bgGradient="linear(to-l, #48BB78,#009D81)"
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
            <Text
              display="inline"
              bgGradient="linear(to-l, #48BB78,#009D81)"
              bgClip="text"
              fontSize="4xl"
              fontWeight="extrabold"
            >
              Frontend developer
            </Text>{" "}
            making the internet fun
          </Text>
          <Link to="/projects" border="2px">
            <Text color="green.400" fontWeight="extrabold" textDecor="underline" fontSize="4xl">
              Check out my work!
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  )
}
