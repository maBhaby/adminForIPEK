import { FC, ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { ILayout } from '@/interfaces'

interface IProps {
  children: ReactNode
  aligin: string
}

const Login: FC<IProps> = ({ children, aligin }) => {
  return (
    <Flex
      h='100vh'
      w='100vw'
      justifyContent='center'
      alignItems={aligin}
    >
      {children}
    </Flex>
  )
}

export default Login
