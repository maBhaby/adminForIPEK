import { Flex , Box, Avatar as CAvatar, Text} from "@chakra-ui/react"

const Avatar = () => {
  return (
    <Flex mt='auto' flexDirection='column' alignItems='center'>
      <CAvatar w='40px' h='40px'></CAvatar>
      <Text color='white'>
        Текущий пользователь
      </Text>
    </Flex>
  )
}

export default Avatar