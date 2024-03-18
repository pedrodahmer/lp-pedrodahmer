import { Flex, Heading } from "@chakra-ui/react";

interface SectionHeaderProps {
  title: string;
  color: string;
  width: string;
}

export function SectionHeader({ title, color, width }: SectionHeaderProps) {
  return (
    <Flex direction={"column"}>
      <Heading>{title}</Heading>
      <Flex borderRadius={20} bg={color} h="5px" w={width}></Flex>
    </Flex>
  );
}
