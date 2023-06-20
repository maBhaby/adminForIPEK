import { userStore } from "@/store/user"
import { useNavigate } from "react-router-dom"
import { useStores } from "@/hooks/useStore"
import { Flex , Box, Avatar as CAvatar, Text} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"

const Avatar = observer(() => {
  const nav = useNavigate()
  const { ModalStore } = useStores()
  console.log(userStore);
  
  const logOut = () => {
    userStore.logout(() => {
      nav('/login')
    }, () => {
      ModalStore.open('error')
    })
  }
  
  return (
    <Flex onClick={logOut} cursor='pointer' mt='auto' flexDirection='column' alignItems='center'>
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