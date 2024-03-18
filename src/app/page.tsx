import { Heading } from "@chakra-ui/react";

import { Container } from "./components/Layout/Container";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
      <AboutMe />
    </Container>
  );
}
