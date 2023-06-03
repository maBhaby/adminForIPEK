import { Box } from "@chakra-ui/react"
import Register from "@/components/Register"
import Layouts from "@/layouts"

const RegisterPage = () => {
  return (
    <Layouts.Login>
      <Register />
    </Layouts.Login>
  )
}

export default RegisterPage