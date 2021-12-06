import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
  useColorModeValue as mode,
  HStack
} from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FaPlayCircle } from 'react-icons/fa'
import { IoShapes } from 'react-icons/io5'
import { Testimonial } from './Testimonial'

const Feature = (props: StackProps) => {
  const { title, children } = props
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Stack>
  )
}

export function Features() {
  return (
    <Box as="section" py="20" bg={mode('gray.100', 'gray.800')}>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Grid templateColumns={{ base: '1fr', md: '360px 1fr' }} gap="64px">
          <Box>
            <Heading size="3xl" letterSpacing="tight" fontWeight="extrabold">
              See why you should choose us
            </Heading>
            <Text mt="6" mb="8" fontSize="lg" fontWeight="medium">
              Noploy offers a service so you don't have to worry about your server infrastructure
            </Text>
            <Button size="lg" colorScheme="blue" minH="14" rightIcon={<BiRightArrowAlt />}>
              See all features
            </Button>
            <Testimonial
              logo={
                <HStack spacing="3">
                  <Box as={IoShapes} fontSize="3xl" />
                  <Text textTransform="uppercase" fontWeight="bold">
                    Logo
                </Text>
                </HStack>}
              author="Rodrigo Krieger"
              company="Executive director"
              image="https://images.unsplash.com/photo-1612298518246-0cdf913cce76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            >
              &ldquo; At volutpat diam ut venenatis tellus. Sit amet consectetur adipiscing elit
              duis. Quis hendrerit dolor magna eget est. Amet est placerat in egestas erat imperdiet
              sed euismod. &rdquo;
            </Testimonial>
          </Box>
          <Box>
            <Center
              bg={mode('white', 'gray.700')}
              shadow="lg"
              minH={{ base: '320px', lg: '480px' }}
              rounded="lg"
            >
              {/* Replace this with your screenshot */}
              <Box as={FaPlayCircle} fontSize="90px" color="gray.300" />
            </Center>
            <SimpleGrid
              rounded="lg"
              mt="10"
              p={{ base: '10', lg: '0' }}
              columns={{ base: 1, lg: 3 }}
              spacing="6"
              bg={{ base: mode('gray.200', 'gray.700'), lg: 'unset' }}
            >
              <Feature title="Server installation">
                We take care of all the security package installations for you, so don't have a headache with your server infrastructure.
              </Feature>
              <Feature title="Site management">
                You can host your site integrated with your git, for automated deploys. Your whole application running inside containers.
              </Feature>
              <Feature title="Status Page">
                You can view the uptime and all incidents on your server to ensure the best possible performance.
              </Feature>
            </SimpleGrid>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}