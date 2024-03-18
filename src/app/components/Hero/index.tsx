import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex alignItems={"center"}>
      <Image src="/images/hero-logo.png" alt="hero-logo" />

      <Flex direction="column" w="40%">
        <Text fontSize={"2rem"} fontWeight={"bold"} mb="0.5rem">
          <span style={{ color: "#66E07A" }}>Olá! </span>Meu nome é
        </Text>

        <Heading fontSize={"4rem"} fontWeight={"bold"} mb="1rem">
          {"{ Pedro Dahmer }"}
        </Heading>

        <Text fontSize={"1.5rem"} fontWeight={"light"} mb="2rem">
          Sou um programador freelancer apaixonado por criar soluções e
          experiências digitais. Estou aqui para oferecer serviços de alta
          qualidade e transformar suas ideias em realidade digital.
        </Text>

        <Button
          h="50px"
          w="50%"
          fontSize={"1.25rem"}
          fontWeight={"bold"}
          borderRadius={"10"}
          color="#fff"
          bg="purple.500"
          _hover={{
            filter: "brightness(0.8)",
            transition: "filter 0.2s",
          }}
        >
          Entrar em contato
        </Button>
      </Flex>
    </Flex>
  );
}
