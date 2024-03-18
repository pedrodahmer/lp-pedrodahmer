"use client";

import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Flex alignItems={"center"}>
        <Image src="/images/hero-logo.png" alt="hero-logo" />

        <Flex direction="column" w="40%">
          <Text fontSize={"2rem"} fontWeight={"bold"}>
            <span style={{ color: "#66E07A" }}>Olá! </span>Meu nome é
          </Text>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "{ Pedro Dahmer }",
              2000,
              "",
              250,
              "{ Pedro Dahmer }",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "4rem",
              display: "inline-block",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
            repeat={Infinity}
          />

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

      <Image src="/images/down-arrow.svg" alt="down-arrow" w="5%" />
    </Flex>
  );
}
