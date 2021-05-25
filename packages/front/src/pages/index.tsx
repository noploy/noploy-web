import { Box } from '@chakra-ui/react';
import { Navbar } from './../components/Header/Navbar/index';

export default function Home() {
  return (
    <Box
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
    >
      <Navbar />
    </Box>
  )
}
