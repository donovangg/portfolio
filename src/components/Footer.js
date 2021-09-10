import React from "react"
import { Flex, Text, Box, IconButton } from "@chakra-ui/react"
import { Link } from "gatsby"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"

export default function Footer() {
  return (
    <Flex
      as="footer"
      border="3px"
      width="15%"
      height="5vh"
      justifyContent="space-around"
      borderColor="red.400"
      display={["none", "none", "flex"]}
    >
        <IconButton icon={<FaGithub />}/>
        <IconButton icon={<FaTwitter />}/>
        <IconButton icon={<FaLinkedinIn  />}/>
    </Flex>
  )
}
