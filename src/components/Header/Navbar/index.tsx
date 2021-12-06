import { useState } from "react";
import {
  Button,
  useColorMode,
  Box,
  Flex,
  Link,
  useColorModeValue,
  HStack,
  IconButton,
  Switch,
  Avatar,
} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { Logo } from "./../../Logo";
import { NavLink } from "./NavLink";
import { SocialIcons } from "../../utils/SocialIcons";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === "light";

  const [isAuth, setIsAuth] = useState(true);

  return (
    <Box as="header" w="100%" maxWidth="7xl" h="20" mx="auto" mt="4" px="6">
      <Flex justify="space-between">
        <Flex alignItems="center">
          <Logo />
        </Flex>
        <Flex as={HStack} spacing="6" alignItems="center">
          <NavLink href="/">Features</NavLink>
          <NavLink href="/">Pricing</NavLink>
          <NavLink href="/">Documentation</NavLink>
          <HStack spacing="2">
            <SocialIcons />
            <IconButton
              size="sm"
              fontSize="18px"
              onClick={toggleColorMode}
              aria-label="Search database"
              icon={lightTheme ? <BiMoon /> : <BiSun />}
            />
          </HStack>
          {isAuth ? (
            <Avatar
              href="/panel"
              cursor="pointer"
              size="md"
              name="André Alvim"
              src="https://avatars.githubusercontent.com/u/36922627"
            />
          ) : (
            <NavLink href="/login" hasBackground>
              Login
            </NavLink>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
