import { Box, SimpleGrid, useColorModeValue, Heading } from '@chakra-ui/react'
import { Testimonial } from './Testimonial';

export function Testimonials() {
  return (
    <Box as="section" bg={useColorModeValue('inherit', 'gray.800')} py="12">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px="4" pt="12" pb="8">
        <Heading align="center" fontWeight="extrabold" maxW="md" mx="auto" pb="8">
          What customers say about Noploy
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
          <Testimonial
            accentColor="blue.500"
            name="Kemi Alex"
            role="VFX Artist and Film-maker"
            image="https://images.unsplash.com/photo-1603610515737-193e0b423983?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjk4fHxsYWR5JTIwaGVhZHNob3QlMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Sed sed risus pretium quam vulputate dignissim. Ornare quam viverra orci sagittis.
            Integer vitae justo eget magna fermentum iaculis eu non diam
          </Testimonial>
          <Testimonial
            accentColor="red.500"
            name="Melinda Doe"
            role="Marketing Coordinator"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTkxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
          >
            Vulputate sapien nec sagittis aliquam malesuada bibendum. Posuere lorem ipsum dolor sit
            amet consectetur adipiscing elit duis
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  )
}