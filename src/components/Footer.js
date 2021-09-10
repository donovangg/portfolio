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
      width="15%"
      height="6vh"

      justifyContent="space-around"
      display={["none", "none", "flex"]}
      position="fixed"
      bottom="0"
    >
        <Flex justifyContent="space-around" width="100%">
        <a href="https://github.com/donovangomez" target="_blank">
        <IconButton
          icon={<FaGithub />}
          backgroundColor="transparent"
          border="2px"
          borderRadius="full"
        />
      </a>
      <a href="https://github.com/donovangomez" target="_blank">
        <IconButton
          icon={<FaTwitter />}
          backgroundColor="transparent"
          border="2px"
          borderRadius="full"
        />
      </a>
      <a href="https://github.com/donovangomez" target="_blank">
        <IconButton
          icon={<FaLinkedinIn />}
          backgroundColor="transparent"
          border="2px"
          borderRadius="full"
        />
      </a>
        </Flex>
    </Flex>
  )
}
