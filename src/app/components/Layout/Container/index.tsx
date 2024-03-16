import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <Flex direction={"column"} px={"10rem"}>
      {children}
    </Flex>
  );
}
