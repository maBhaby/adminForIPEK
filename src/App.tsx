import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Router from './Router'
import client from './utils/client'
import { SWRConfig } from 'swr'
import useCSRF from './hooks/useCSRF'
import Loading from './components/Loading'

export default function App (): JSX.Element {
  const { isLoading, isError } = useCSRF()

  return (
    <ChakraProvider>
      {!isLoading ? <Router /> : <Loading />}
    </ChakraProvider>
  )
}
