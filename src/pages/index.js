import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Flex height="95vh" justifyContent="center" alignItems="center">
        <Flex
          border="2px"
          borderColor="red.200"
          m={0}
          flexDir="column"
          textAlign={['center', 'center', 'left', 'left']}

        >
          <Text fontSize="8xl" mx={0} px={0}>Hi I'm Donovan!</Text>
          <Text fontSize="4xl">I'm a <Text color="pink.400" display="inline">Frontend developer</Text> making the internet fun
          </Text>
          <Link>
            <Text fontSize="3xl" >
              Check out my work!
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  )
}
