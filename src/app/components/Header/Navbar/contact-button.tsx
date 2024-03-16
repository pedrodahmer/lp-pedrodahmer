import { Button } from "@chakra-ui/react";

export function ContactButton() {
  return (
    <Button
      h="3rem"
      w="10rem"
      fontSize={"1.25rem"}
      fontWeight={"bold"}
      borderRadius={"10"}
      bg="green.500"
      _hover={{
        filter: "brightness(0.8)",
        transition: "filter 0.2s",
      }}
    >
      Contato
    </Button>
  );
}
