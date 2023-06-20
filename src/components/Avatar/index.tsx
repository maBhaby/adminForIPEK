import { userStore } from "@/store/user"
import { Flex , Box, Avatar as CAvatar, Text} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"

const Avatar = observer(() => {
  console.log(userStore);
  
  return (
    <Flex cursor='pointer' mt='auto' flexDirection='column' alignItems='center'>
      <CAvatar w='40px' h='40px'></CAvatar>
      <Text color='white'>
        {
          userStore?.user?.email
        }
      </Text>
    </Flex>
  )
})

export default Avatar