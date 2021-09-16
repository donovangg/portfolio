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
           
            color: "green.300",
            transition: "0.3s"
          }}
        >
          {item}
        </Text>
      </Link>
    </Flex>
  )
}
