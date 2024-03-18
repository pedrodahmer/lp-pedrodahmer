import { Flex, Image, Text } from "@chakra-ui/react";

interface TechIconProps {
  icon: string;
  text: string;
}

export function TechIcon({ icon, text }: TechIconProps) {
  return (
    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <Image src={icon} alt={`${text}-icon`} />
      <Text>{text}</Text>
    </Flex>
  );
}
