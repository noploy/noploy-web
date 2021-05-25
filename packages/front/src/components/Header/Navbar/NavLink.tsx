import { Link, LinkProps, useColorMode, useColorModeValue } from '@chakra-ui/react';

interface NavLinkProps extends LinkProps {
  hasBackground?: boolean
}

export function NavLink({ children, hasBackground, ...rest }: NavLinkProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const lightTheme = colorMode === 'light'

  return (
    <Link
      fontWeight="medium"
      py="2"
      px="3"
      borderRadius={6}
      _hover={{ bg: hasBackground ? '' : useColorModeValue('gray.100', 'gray.700') }}
      color={hasBackground ? useColorModeValue('gray.100', 'gray.900') : useColorModeValue('gray.900', 'gray.100')}

      bg={hasBackground && useColorModeValue('blue.500', 'blue.300')}
      {...rest}>
      {children}
    </Link>
  )
}