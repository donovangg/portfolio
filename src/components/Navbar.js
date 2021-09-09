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
      justifyContent="space-between"
      border="5px"
      borderTopColor="blue.400"
    >
      <Button ref={btnRef} colorScheme="teal" display={['block', 'block', 'none', 'none']} onClick={onOpen}>
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex
        border="3px"
        width="50%"
        justifyContent="space-around"
        borderColor="red.400"
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
