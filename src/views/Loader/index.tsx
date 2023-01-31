import { FC } from 'react'
import { Spinner, Flex } from '@chakra-ui/react'

const Loader: FC = () => {
  return (
    <Flex h='100vh' alignItems='center' justifyContent='center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='black.500'
        size='xl'
      />
    </Flex>
  )
}

export default Loader
