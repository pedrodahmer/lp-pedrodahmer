import { Flex, Text } from "@chakra-ui/react";
import { SectionHeader } from "../Layout/SectionHeader";
import { Image } from "@chakra-ui/react";
import { TechIcon } from "./Tech";

import { techIcons } from "./Tech/tech-icons";

export function AboutMe() {
  return (
    <Flex direction={"column"} pt="5rem">
      <SectionHeader title="Sobre mim" color="green.300" width="13rem" />

      <Flex pt="5rem" justifyContent={"space-between"}>
        <Flex direction={"column"} w="40%">
          <Text fontSize={"1.25rem"}>
            Sou um Desenvolvedor Fullstack com quatro anos de experiência em
            desenvolvimento de aplicações web. Atualmente atuo como
            desenvolvedor freelancer. <br />
            <br />
            Minha missão é fornecer as ferramentas certas para que empresas e
            marcas possam crescer e conquistar seus objetivos através do meio
            digital. <br />
            <br />
            Meu foco estásempre em prestar o melhor atendimento possível para
            meus clientes, assim como entregar soluções práticas, criativas e de
            muita qualidade. <br />
            <br />
            Essas são algumas das tecnologias que trabalho:
          </Text>

          <Flex gap="2rem" mt="3rem">
            <TechIcon icon={techIcons[0].icon} text={techIcons[0].text} />
            <TechIcon icon={techIcons[1].icon} text={techIcons[1].text} />
            <TechIcon icon={techIcons[2].icon} text={techIcons[2].text} />
          </Flex>

          <Flex gap="2rem" mt="2rem">
            <TechIcon icon={techIcons[3].icon} text={techIcons[0].text} />
            <TechIcon icon={techIcons[4].icon} text={techIcons[4].text} />
            <TechIcon icon={techIcons[5].icon} text={techIcons[5].text} />
          </Flex>
        </Flex>

        <Image
          src="/images/minha-cara.png"
          alt="profile-picture"
          mt="-15rem"
          mr="-8rem"
        />
      </Flex>
    </Flex>
  );
}
