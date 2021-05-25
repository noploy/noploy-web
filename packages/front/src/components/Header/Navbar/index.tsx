import { Button, useColorMode, Box, Flex, Link, useColorModeValue, HStack, IconButton, Switch } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi'
import { RiDiscordFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri'

import { Logo } from './../../Logo/index';
import { NavLink } from './NavLink';


export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light'

  return (
    <Box
      as="header"
      w="100%"
      maxWidth='7xl'
      h="20"
      mx="auto"
      mt="4"
      px="6"
    >
      <Flex justify="space-between">
        <Flex alignItems="center">
          <Logo />
        </Flex>
        <Flex as={HStack} spacing="6" alignItems="center">
          <NavLink href="/">Features</NavLink>
          <NavLink href="/">Pricing</NavLink>
          <NavLink href="/">Documentantion</NavLink>
          <HStack spacing="2">
            <IconButton
              size="sm"
              fontSize="18px"
              aria-label="Twitter"
              icon={<RiTwitterFill />}
            />
            <IconButton
              size="sm"
              fontSize="18px"
              aria-label="Discord"
              icon={<RiDiscordFill />}
            />
            <IconButton
              size="sm"
              fontSize="18px"
              aria-label="Github"
              icon={<RiGithubFill />}
            />
            <IconButton
              size="sm"
              fontSize="18px"
              onClick={toggleColorMode}
              aria-label="Search database"
              icon={lightTheme ? <BiMoon /> : <BiSun />}
            />
          </HStack>
          <NavLink href="/login" hasBackground>Login</NavLink>
        </Flex>
      </Flex>
    </Box>
  )
}