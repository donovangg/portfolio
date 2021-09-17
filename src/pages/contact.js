import React from "react"
import Layout from "../components/Layout"
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react"

export default function contact() {
  return (
    <Layout>
      <Box mt={12}>
        <Text
          bgGradient="linear(to-l, #48BB78,#009D81)"
          bgClip="text"
          fontSize="7xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Contact
        </Text>
        <Text fontSize="3xl" textAlign="center">
          Drop me a line
        </Text>
      </Box>
      <Flex
        m="auto"
        width="50vw"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Flex as="form" flex="1" flexDir="column" alignItems="center">
          <FormControl id="first-name" isRequired>
            <FormLabel
              bgGradient="linear(to-l, #48BB78,#009D81)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              First name
            </FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel
              bgGradient="linear(to-l, #48BB78,#009D81)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              Last name
            </FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel
              bgGradient="linear(to-l, #48BB78,#009D81)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              Email address
            </FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel
              bgGradient="linear(to-l, #48BB78,#009D81)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              Your Message
            </FormLabel>
            <Textarea placeholder="In n Out is awesome" />
          </FormControl>
          <Button width="100%" backgroundColor="green.300" type="submit">Send</Button>
        </Flex>
      </Flex>
    </Layout>
  )
}
