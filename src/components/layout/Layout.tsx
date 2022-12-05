import { SidebarContext, SidebarProvider } from '@/context/SidebarContext'
import { Box, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import Header from '@/components/layout/Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout (): JSX.Element {
  const { isOpen } = useContext(SidebarContext)

  return (
    <SidebarProvider>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex grow={1} overflow="hidden">
          {isOpen && <Sidebar />}
          <Box p={5} overflow="scroll">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </SidebarProvider>
  )
}
