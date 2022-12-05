import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import Router from './Router'
import client from './utils/client'

export default function App (): JSX.Element {
  const [haveCsrfToken, setHaveCsrfToken] = useState<boolean>(false)

  async function getCsrfToken (): Promise<void> {
    await client.get('sanctum/csrf-cookie')
    setHaveCsrfToken(true)
  }

  useEffect(() => {
    void getCsrfToken()
  }, [])

  return (
    <ChakraProvider>
      {haveCsrfToken
        ? (
          <AuthProvider>
            <Router />
          </AuthProvider>
          )
        : (
          <Flex h="100vh" justifyContent="center" alignItems="center">
            <Spinner size="xl" />
          </Flex>
          )
      }
    </ChakraProvider>
  )
}
