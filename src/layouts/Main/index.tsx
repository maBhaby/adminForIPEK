import { FC } from 'react'
import { ILayout } from '@/interfaces'
import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

const Main: FC<ILayout> = () => {
  return (
    <Flex minHeight='100%'>
      <nav>star</nav>
      <Outlet />
    </Flex>
  )
}

export default Main
