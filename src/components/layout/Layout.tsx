import { SidebarContext, SidebarProvider } from '@/context/SidebarContext'
import { Box, Flex, Grid, GridItem, Stack, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'react'
import Header from '@/components/layout/Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { IconHome, IconHanger, IconCategory, IconBox } from '@tabler/icons'
import NavItem from './NavItem'

export default function Layout (): JSX.Element {
  const { isOpen } = useContext(SidebarContext)
  const isMobile = useBreakpointValue({ base: false, md: true })

  return (
    <Grid
      p={3}
      gap={3}
      h="100vh"
      templateRows="auto 1fr"
      templateColumns={{
        base: 'full',
        md: '15rem 1fr'
      }}
    >

      <GridItem
        p={3}
        h="full"
        colSpan={2}
        rounded="md"
        bg={useColorModeValue('gray.50', 'gray.900')}
      ><Header /></GridItem>

      {isOpen &&
        <GridItem
          p={3}
          h="full"
          rounded="md"
          bg={useColorModeValue('gray.50', 'gray.900')}
        >
          <Stack>
            <NavItem to="/" icon={IconHome}>Дэшборд</NavItem>
            <NavItem to="/product" icon={IconHanger}>Товары</NavItem>
            <NavItem to="/" icon={IconCategory}>Категории</NavItem>
            <NavItem to="/" icon={IconBox}>Заказы</NavItem>
          </Stack>
        </GridItem>
      }

      {isOpen && isMobile &&
        <GridItem
          p={3}
          h="full"
          rounded="md"
          bg={useColorModeValue('gray.50', 'gray.900')}
        ><Outlet /></GridItem>
      }
    </Grid>
  )
}
