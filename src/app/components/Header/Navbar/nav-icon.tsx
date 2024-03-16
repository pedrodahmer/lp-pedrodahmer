import { Text } from "@chakra-ui/react";

interface NavIconProps {
  text: string;
  href: string;
}

export function NavIcon({ text, href }: NavIconProps) {
  return (
    <Text fontWeight={"bold"} fontSize={"1.125rem"}>
      {text}
    </Text>
  );
}
