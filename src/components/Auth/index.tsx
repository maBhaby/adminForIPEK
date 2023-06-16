import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useFormik } from 'formik'

import { loginSchema } from '@/utils/schemas/login-schema'
import { AuthApi } from '@/api/services/auth'

import AuthView from '@/views/Auth'

const Auth: FC = observer(() => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      AuthApi.login({ ...values }).then(
        () => { navigate('/') },
        (res) => { throw new Error(res)}
      )
    }
  })

  return <AuthView formik={formik} />
})

export default Auth
