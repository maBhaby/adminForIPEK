import { HStack, Icon, useColorModeValue, Box } from '@chakra-ui/react'
import type { TablerIcon } from '@tabler/icons'
import { NavLink, To } from 'react-router-dom'

interface NavItemProps {
  icon: TablerIcon
  to: To
  children: React.ReactNode
}

export default function NavItem ({ icon, to, children }: NavItemProps): JSX.Element {
  return (
    <HStack
      to={to}
      as={NavLink}
      px="4"
      py="3"
      cursor="pointer"
      fontWeight="semibold"
      rounded="lg"
      _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
    >
      <Icon boxSize="4" as={icon} />
      <Box>{children}</Box>
    </HStack>
  )
}
