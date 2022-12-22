import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthView from '@/views/Auth'
import { useFormik } from 'formik'
import { loginSchema } from '@/utils/schemas/login-schema'
import { ROUTER_PATHS } from '@/utils/const'
import { userStore } from '@/store/user'
import { observer } from 'mobx-react-lite'

const Auth: FC = observer(() => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (e) => {
      const { userName, password } = formik.values
      userStore.login(userName, password)
        .then(() => navigate(ROUTER_PATHS.DASHBOARD, { replace: true }))
        .catch((e) => { console.log(e) })
    }
  })
  return <AuthView formik={formik} />
})

export default Auth
