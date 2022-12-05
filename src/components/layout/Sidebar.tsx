import { Box, useColorModeValue } from '@chakra-ui/react'
import { IconHome, IconCategory, IconBox, IconHanger } from '@tabler/icons'
import { NavLink } from 'react-router-dom'
import NavItem from '@/components/layout/NavItem'

export default function Sidebar (): JSX.Element {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      flexShrink={0}
      w={{ base: '100%', md: '60' }}
      p={5}
    >
      {/* <NavLink to="/"> */}
        <NavItem to="/" icon={IconHome}>Дэшборд</NavItem>
      {/* </NavLink> */}
      {/* <NavLink to="/product"> */}
        <NavItem to="/product" icon={IconHanger}>Товары</NavItem>
      {/* </NavLink> */}
      {/* <NavLink to="/"> */}
        <NavItem to="/" icon={IconCategory}>Категории</NavItem>
      {/* </NavLink> */}
      {/* <NavLink to="/"> */}
        <NavItem to="/" icon={IconBox}>Заказы</NavItem>
      {/* </NavLink> */}
    </Box>
  )
}
