import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthView from '@/views/Auth'
import { useFormik } from 'formik'
import { loginSchema } from '@/utils/schemas/login-schema'
import { ROUTER_PATHS } from '@/utils/const'
import AuthApiService from '@/api/services/Auth'

const Auth: FC = () => {
  const navigate = useNavigate()
  console.log(navigate)
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (e) => {
      AuthApiService.login(formik.values.userName, formik.values.password)
        .then(response => console.log(response))
        .catch(err => console.warn(err))
      navigate(ROUTER_PATHS.DASHBOARD, { replace: true })
    }
  })
  return <AuthView formik={formik} />
}

export default Auth
