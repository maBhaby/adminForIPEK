import Layouts from '@/layouts'
import { Button, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
  return (
    <Layouts.Login aligin='center'>
      <Flex gap='20px' flexDirection='column' alignItems='center'>
        <Text fontWeight='bold' fontSize='100px'>
          404 
        </Text>
        <Button>
          <Link to='/'>на главную</Link>
        </Button>
      </Flex>
    </Layouts.Login>
  )
}

export default ErrorPage
