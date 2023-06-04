import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useFormik } from 'formik'

import { loginSchema } from '@/utils/schemas/login-schema'
import { AuthApi } from '@/api/services/auth'

import AuthView from '@/views/Auth'
import Cookies from 'js-cookie'

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
        (res) => { console.log(res) },
        (res) => { console.log(res) }
      )
      // const { userName, password } = formik.values
      // userStore.login(userName, password)
      //   .then(() => navigate(ROUTER_PATHS.MAIN, { replace: true }))
      //   .catch((e) => { console.log(e) })
    }
  })

  useEffect(() => {
    console.log(Cookies.get('csrftoken'));
    
  }, [])

  return <AuthView formik={formik} />
})

export default Auth
