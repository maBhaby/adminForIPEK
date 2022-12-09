import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react'
import { IconSun, IconMoon, IconArrowLeft, IconMenu2, IconLogout } from '@tabler/icons'
import { SidebarContext } from '@/context/SidebarContext'
import { useContext } from 'react'
import useUser from '@/hooks/useUser'

export default function Header (): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useContext(SidebarContext)
  const { user } = useUser()

  return (
      <Flex justifyContent="space-between">
        <Button onClick={onToggle}>
          {isOpen
            ? <Icon as={IconArrowLeft}/>
            : <Icon as={IconMenu2}/>
          }
        </Button>
        <Flex alignItems="center">
          <Stack direction="row" spacing={3} align="center">
            <Button onClick={toggleColorMode}>
              {colorMode === 'light'
                ? <Icon as={IconMoon}/>
                : <Icon as={IconSun}/>
              }
            </Button>
            <Button onClick={() => {
              auth.logout()
            }}>
              <Icon as={IconLogout}/>
            </Button>
            <HStack>
              <Avatar
                size={'sm'}
                src={`https://avatars.dicebear.com/api/croodles-neutral/${user.email}.svg?b=white`}
              />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{user.name}</Text>
                <Text fontSize="xs" color="gray.600">
                  {user.email}
                </Text>
              </VStack>
            </HStack>
          </Stack>
        </Flex>
      </Flex>
  )
}
