import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";
import { ILayout } from "@/interfaces";

const Login: FC<ILayout> = ({ children }) => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#71788794"
    >
      {children}
    </Flex>
  );
};

export default Login;
