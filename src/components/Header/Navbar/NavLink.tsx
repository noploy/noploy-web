import { LinkProps, useColorMode, useColorModeValue, Box } from '@chakra-ui/react';
import Link from 'next/link';

interface NavLinkProps extends LinkProps {
  hasBackground?: boolean;
  href: string
}

export function NavLink({ children, hasBackground, href, }: NavLinkProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light'

  return (
    <Box
      cursor="pointer"
      fontWeight="medium"
      py="2"
      px="3"
      borderRadius={6}
      _hover={{ bg: hasBackground ? '' : useColorModeValue('gray.100', 'gray.700') }}
      color={hasBackground ? useColorModeValue('gray.100', 'gray.900') : useColorModeValue('gray.900', 'gray.100')}
      bg={hasBackground && useColorModeValue('blue.500', 'blue.300')}
    >
      <Link passHref href={href}>
        {children}
      </Link>

    </Box>
  )
}