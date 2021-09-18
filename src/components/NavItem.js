import React from "react"
import { Link } from "gatsby"
import { Flex, Text, Box } from "@chakra-ui/react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function NavItem({ item, to }) {
  return (
    <Flex>
      <AniLink cover to={to} bg="#80A4FD">
        <Text
          fontSize="2xl"
          _hover={{
            color: "blue.300",
            transition: "0.3s"
          }}
        >
          {item}
        </Text>
      </AniLink>
    </Flex>
  )
}
