import React from "react"
import { Link } from "gatsby"
import { Flex, Text, Box } from "@chakra-ui/react"

export default function NavItem({ item, to}) {
  return (
    <Flex>
      <Link to={to}>
        <Text>{item}</Text>
      </Link>
    </Flex>
  )
}
