import { FC } from 'react'
import { FormikValues } from 'formik'
import {

  Text,
  Stack,
  Button
} from '@chakra-ui/react'
import Input from '@/views/Input'

const Auth: FC<FormikValues> = ({ formik }) => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Stack spacing={8} mx='auto' w='100%' maxW='lg' py={12} px={6}>
        <Text textAlign='center' fontSize='26px'>Авторизация</Text>
        <Stack spacing={6}>
          <Input
            name='username'
            label='E-mail'
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.username}
            touched={touched.username}
            type='text'
            value={values.username}
          />
          <Input
            name='password'
            onChange={handleChange}
            error={errors.password}
            onBlur={handleBlur}
            label='Пароль'
            type='password'
            touched={touched.password}
            value={values.password}
          />
          <Button type='submit' colorScheme='blue'>
            Войти
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default Auth
