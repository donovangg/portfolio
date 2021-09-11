import React from "react"
import { Link } from "gatsby"
import { Flex, Text, Box } from "@chakra-ui/react"

export default function NavItem({ item, to }) {
  return (
    <Flex>
      <Link to={to}>
        <Text
          fontSize="2xl"
          _hover={{
            background: "white",
            color: "pink.400",
            transition: "0.3s"
          }}
        >
          {item}
        </Text>
      </Link>
    </Flex>
  )
}
