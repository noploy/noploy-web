import React from 'react'
import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import { IntegrationItem } from './IntegrationItem';

export function Integrations() {
  return (
    <Container maxW={'7xl'} mx="auto" py="6">
      <Heading
        lineHeight={1.1}
        fontWeight='bold'
        as="h1"
        fontSize="4xl"
        textAlign="center"
        mb="8"
      >
        We have integrations with</Heading>
      <SimpleGrid gap="4" minChildWidth="320px" align="flex-start">
        <IntegrationItem file="google-drive.png" />
        <IntegrationItem file="cloudflare.svg" />
        <IntegrationItem file="github.png" />
      </SimpleGrid>
    </Container>
  )
}