import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Badge,
  Stack,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from './../Logo/index';
import { ListHeaderFooter } from './ListHeaderFooter';
import { RiTwitterFill, RiDiscordFill, RiGithubFill } from 'react-icons/ri';
import { SocialIcons } from '../utils/SocialIcons';


export function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2021 Noploy. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialIcons />
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeaderFooter>Company</ListHeaderFooter>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Status <Badge variant="solid" colorScheme="green">ONLINE</Badge></Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeaderFooter>Features</ListHeaderFooter>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeaderFooter>Support</ListHeaderFooter>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}