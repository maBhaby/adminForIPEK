import * as yup from 'yup'

export const loginSchema = yup
  .object()
  .shape({
    userName: yup
      .string()
      .email("That doesn't look like a valid email")
      .required('This field is required.'),
    password: yup.string().required('This field is required.')
  })
