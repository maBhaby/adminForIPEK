import React, { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { BASIC_COLOR } from '@/utils/const'
interface IProp {
  formik: {}
}

const Auth: FC<IProp> = ({ formik }) => {
  console.log(formik)
  return (
    <Box borderRadius='10' backgroundColor={BASIC_COLOR.WHITE_IVORY} padding='30'>
      sds
    </Box>
  )
}

export default Auth
