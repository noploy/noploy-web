import React from 'react';
import { Box } from '@chakra-ui/react';
import { Navbar } from './../components/Header/Navbar/index';
import { Introduction } from '../components/Home/Introduction/index';
import { Footer } from './../components/Footer/index';
import { Integrations } from '../components/Home/Integrations/index';
import { Pricing } from '../components/Home/Pricing/index';
import { Features } from './../components/Home/Features/index';
import { Testimonials } from './../components/Home/Testimonials/index';

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Integrations />
      <Features />
      <Testimonials />
      {/* <Pricing /> */}
      <Footer />
    </>
  )
}
