import { Button, useColorMode, Box, Flex, Link, useColorModeValue, HStack, IconButton, Switch } from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi'
import { RiDiscordFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri'

import { Logo } from './../../Logo/index';
import { NavLink } from './NavLink';


export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light'

  return (
    <Flex justify="space-between">
      <Flex alignItems="center">
        <Logo />
      </Flex>
      <Flex as={HStack} spacing="6" alignItems="center">
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Documentation</NavLink>
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
        <NavLink hasBackground>Login</NavLink>
      </Flex>
    </Flex>
  )
}