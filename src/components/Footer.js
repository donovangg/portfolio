import React from "react"
import { Flex, Text, Box, IconButton, Link } from "@chakra-ui/react"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Flex as="footer"  width="100%" justifyContent="space-around" alignItems="center">
      <Text as="h3"> &copy; Donovan Gomez {currentYear}</Text>
      <Text as="p">
        Built with{" "}
        <Link
          textDecor="underline"
          href="https://www.gatsbyjs.com/"
          _hover={{ color: "blue.400" }}
          target="_blank"
          rel="noreferrer"
        >
          GatsbyJS
        </Link>{" "}
        and
        <Link
          href="https://chakra-ui.com/"
          textDecor="underline"
          _hover={{ color: "blue.400" }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Chakra UI
        </Link>
        . Deployed on
        <Link
          href="https://www.netlify.com/"
          textDecor="underline"
          _hover={{ color: "blue.400" }}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </Link>
        {/* <a href="https://www.flaticon.com/free-icons/kpop" title="kpop icons">Kpop icons created by Freepik - Flaticon</a> */}
      </Text>
    </Flex>
  )
}
