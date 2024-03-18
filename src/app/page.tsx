import { Heading } from "@chakra-ui/react";

import { Container } from "./components/Layout/Container";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
}
