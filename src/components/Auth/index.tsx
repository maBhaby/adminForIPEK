import React, { FC } from 'react'
import AuthView from '@/views/Auth'
import { useFormik } from 'formik'
import { loginSchema } from '@/utils/schems/LoginShema'

const Auth: FC = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: (e) => {
      console.log(e)
    }
  })
  return <AuthView formik={formik} />
}

export default Auth
