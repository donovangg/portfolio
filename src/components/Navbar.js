import React from "react"
import {
  Flex,
  Text,
  Box,
  IconButton,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react"
import NavItem from "./NavItem"

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Flex
      as="nav"
      height="5vh"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Button
        ref={btnRef}
        colorScheme="teal"
        display={["block", "block", "none", "none"]}
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Where do you want to go?</DrawerHeader>

          <DrawerBody>
            <NavItem item="Home" to="/" />
            <NavItem item="Portfolio" to="/portfolio" />
            <NavItem item="About" to="/about" />
            <NavItem item="Blog" to="/blog" />
            <NavItem item="Contact" to="/contact" />
          </DrawerBody>

          <DrawerFooter>
            social links
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex
        border="3px"
        width="38%"
        justifyContent="space-around"
        borderColor="red.400"
        display={["none", "none", "flex"]}
      >
        <NavItem item="Home" to="/" />
        <NavItem item="Portfolio" to="/portfolio" />
        <NavItem item="About" to="/about" />
        <NavItem item="Blog" to="/blog" />
        <NavItem item="Contact" to="/contact" />
      </Flex>
    </Flex>
  )
}
