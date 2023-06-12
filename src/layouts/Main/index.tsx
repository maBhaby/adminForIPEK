import { FC, useState } from "react";
import { ILayout } from "@/interfaces";
import { BASIC_COLOR } from "@/utils/const";
import { Outlet } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import Avatar from "@/components/Avatar";
import Navigate from "@/views/Navigate";
import { logo } from "@/assets";

const Main: FC<ILayout> = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box bg={BASIC_COLOR.BACKGROUND}>
      <Collapse in={isOpen}>
        <Flex
          position="fixed"
          flexDirection="column"
          backgroundColor={BASIC_COLOR.BLACK}
          height="100vh"
          maxWidth="270px"
          w="100%"
          minHeight="100%"
        >
          <Box
            pt="10"
            display="flex"
            flexDirection="column"
            alignItems="center"
            h="auto"
            minH="200px"
            w="100%"
          >
            <Image src={logo} h="80px" />
            <Text
              color={BASIC_COLOR.WHITE}
              fontFamily="Adderley"
              fontSize="3xl"
            >
              АДМИН ПАНЕЛЬ
            </Text>
          </Box>
          <Navigate />
          <Flex justifyContent='center' pb='50px' flex='1 1 auto' >
            <Avatar />
          </Flex>
        </Flex>
      </Collapse>
      <Box
        minHeight="100vh"
        p="5"
        pt="80px"
        ml={isOpen ? "270px" : "0px"}
        position="relative"
      >
        <Button
          bgColor="#0a0a0a"
          _hover={{ bgColor: "#0a0a0a" }}
          color="white"
          borderRadius="0"
          position="absolute"
          left="0"
          top="20px"
          onClick={onToggle}
        >
          Show
        </Button>
        <Box m="0 auto">
          <Outlet />
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Main;
