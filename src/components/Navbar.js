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
  useColorMode,
} from "@chakra-ui/react"
import NavItem from "./NavItem"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaHamburger } from "@react-icons/all-files/fa/FaHamburger"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Flex
      as="nav"
      p={1}
      justifyContent="space-between"
      borderTop="4px"
      borderColor="blue.400"
      alignItems="center"
    >
      <Button
        ref={btnRef}
        colorScheme="teal"
        display={["block", "block", "block", "none"]}
        onClick={onOpen}
        backgroundColor="transparent"
        color="gray.700"
        variant="none"
        fontSize="3xl"
        _focus={{ border: "none", backgroundColor: "transparent" }}
        _hover={{
          background: "white",
          color: "blue.300",
          transition: "0.3s",
        }}
        position="sticky"
        top="0"
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
            <NavItem item="Projects" to="/projects" />
            <NavItem item="About" to="/about" />
            <NavItem item="Blog" to="/blogs" />
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
        justifyContent="space-around"
        width="15%"
        display={[ "none", "none", "none", "flex"]}
      >
        <a href="https://github.com/donovangomez" target="_blank">
          <IconButton
            icon={<FaGithub />}
            backgroundColor="transparent"
            border="2px"
            borderRadius="full"
          />
        </a>
        <a href="https://twitter.com/donovan_kun" target="_blank">
          <IconButton
            icon={<FaTwitter />}
            backgroundColor="transparent"
            border="2px"
            borderRadius="full"
          />
        </a>
        <a href="https://www.linkedin.com/in/donovan-gomez/" target="_blank">
          <IconButton
            icon={<FaLinkedinIn />}
            backgroundColor="transparent"
            border="2px"
            borderRadius="full"
          />
        </a>
      </Flex>

      <Flex
        border="3px"
        width="38%"
        height="100%"
        justifyContent="space-around"
        align-alignItems="center"
        display={["none", "none","none", "flex"]}
      >
        <NavItem item="Home"  to="/" />
        <NavItem item="Portfolio" to="/projects" />
        <NavItem item="About" to="/about" />
        <NavItem item="Blog" to="/blogs" />
        <NavItem item="Contact" to="/contact" />
        <Box>
          <IconButton
            icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            variant="unstyled"
            fontSize="2xl"
            _hover={{ color: "blue.400" }}
            _focus={{ border: "none", backgroundColor: "transparent" }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
