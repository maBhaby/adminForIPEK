import { FC } from 'react'
import { ILayout } from '@/interfaces'
import { BASIC_COLOR } from '@/utils/const'
import { Outlet } from 'react-router-dom'
import { Flex, Box, Image, Text } from '@chakra-ui/react'
import Navigate from '@/views/Navigate'
import { logo } from '@/assets'

const Main: FC<ILayout> = ({ children }) => {
  return (
    <Box bg={BASIC_COLOR.BACKGROUND}>
      <Flex
        position='fixed'
        flexDirection='column'
        backgroundColor={BASIC_COLOR.BLACK}
        height='100vh'
        maxWidth='250px'
        w='100%'
        minHeight='100%'
      >
        <Box
          pt='10'
          display='flex'
          flexDirection='column'
          alignItems='center'
          h='auto'
          minH='200px'
          w='100%'
        >
          <Image src={logo} h='80px' />
          <Text color={BASIC_COLOR.WHITE} fontFamily='Adderley' fontSize='3xl'>
            VICESEASON
          </Text>
        </Box>
        <Navigate />
      </Flex>
      <Box minHeight='100vh' p='5' ml='250px'>
        <Box maxW='1366' m='0 auto'>
          <Outlet />
        </Box>
      </Box>
      {children}
    </Box>
  )
}

export default Main
