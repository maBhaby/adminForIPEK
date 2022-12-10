import { FC, useEffect } from 'react'
import { FormikValues } from 'formik'
import {
  Checkbox,
  Stack,
  Button
} from '@chakra-ui/react'
import Input from '../Input'

const Auth: FC<FormikValues> = ({ formik }) => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik

  useEffect(() => {
    console.log(formik)
  }, [formik])

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack spacing={4}>
          <Input
            name='userName'
            label='user name'
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.userName}
            touched={touched.userName}
            type='text'
            value={values.userName}
          />
          <Input
            name='password'
            onChange={handleChange}
            error={errors.password}
            onBlur={handleBlur}
            label='password'
            type='password'
            touched={touched.password}
            value={values.password}
          />
          <Checkbox name='rememder'>Запомнить меня</Checkbox>
          <Button type='submit' colorScheme='blue'>
            Войти
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default Auth
