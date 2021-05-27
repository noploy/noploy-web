import React from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from './../components/Header/Navbar/index';
import { Introduction } from '../components/Header/Introduction/index';
import { Footer } from './../components/Footer/index';
import { Integrations } from './../components/Integrations/index';
import { Pricing } from './../components/Pricing/index';

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Integrations />
      <Pricing />
      <Footer />
    </>
  )
}
