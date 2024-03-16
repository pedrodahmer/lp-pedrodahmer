import { Button, Flex } from "@chakra-ui/react";
import { ContactButton } from "./contact-button";
import { NavIcon } from "./nav-icon";

export function Navbar() {
  return (
    <Flex align={"center"} gap={"2.5rem"}>
      <NavIcon text="Sobre mim" href="#sobre" />
      <NavIcon text="Projetos" href="#projetos" />
      <NavIcon text="Como posso ajudar?" href="#servicos" />
      <ContactButton />
    </Flex>
  );
}
