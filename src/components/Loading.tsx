import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading (): JSX.Element {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Spinner size="xl" />
    </Flex>
  )
}
