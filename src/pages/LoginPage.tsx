import useAuth from '@/hooks/useAuth'
import { User } from '@/models'
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Icon,
  useColorMode
} from '@chakra-ui/react'
import { TbSun, TbMoon } from 'react-icons/tb'
import { ActionFunctionArgs, Form, redirect, useLocation, useNavigate } from 'react-router-dom'
import client from '@/utils/client'
import React, { ChangeEvent, FormEvent } from 'react'
import { AuthContextType } from '@/context/AuthContext'

export const loginAction = (auth: AuthContextType) => async ({
  request,
  params
}: ActionFunctionArgs) => {
  const formData = await request.formData()
  await auth.login(formData)
  // console.log(auth.user)
  // return redirect('/')
  return null
}

export default function LoginPage (): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()

  const location = useLocation()
  const navigate = useNavigate()
  const auth = useAuth()

  const from = location.state?.from?.pathname || '/'

  // async function handleSubmit (event: FormEvent<HTMLFormElement>): Promise<void> {
  //   event.preventDefault()

  //   const form = new FormData(event.currentTarget)

  //   await client.post('login', {
  //     body: form
  //   })

  //   await auth.login(form.email)

  //   navigate(from)
  // }

  return (
    <Form method="post">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              placeholder="john.doe@viceseason.by"
              type="email"
              defaultValue="stanislav@laont.me"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Пароль</FormLabel>
            <Input
              name="password"
              type="password"
              defaultValue="password"
            />
          </FormControl>
          <Checkbox name="rememder">Запомнить меня</Checkbox>
          <Button type="submit" colorScheme="blue">Войти</Button>
        </Stack>
        <Button onClick={toggleColorMode}>
          <Icon as={colorMode === 'light' ? TbSun : TbMoon} />
        </Button>
      </Stack>
    </Form>
  )
}
