import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./../components/Header/Navbar";
import { Introduction } from "../components/Home/Introduction";
import { Footer } from "./../components/Footer";
import { Integrations } from "../components/Home/Integrations";
import { Pricing } from "../components/Home/Pricing";
import { Features } from "./../components/Home/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Integrations />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
