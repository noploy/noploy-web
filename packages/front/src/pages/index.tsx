import { Box } from '@chakra-ui/react';
import { Navbar } from './../components/Header/Navbar/index';
import { Introduction } from '../components/Header/Introduction/index';
import { Footer } from './../components/Footer/index';

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Footer />
    </>
  )
}
