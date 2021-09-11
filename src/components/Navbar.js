import React from "react"
import {
  Flex,
  Text,
  Box,
  IconButton,
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
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaHamburger } from "@react-icons/all-files/fa/FaHamburger"
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
        backgroundColor="transparent"
        color="black.400"
      >
        <FaHamburger />
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
