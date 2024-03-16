import { Flex, Heading, Image } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Logo } from "./logo";

export function Header() {
  return (
    <Flex h="7.8rem" p={"1.8rem"} justify={"space-between"}>
      <Logo />
      <Navbar />
    </Flex>
  );
}
