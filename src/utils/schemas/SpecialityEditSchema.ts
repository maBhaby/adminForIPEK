import * as yup from 'yup'

export const SpecialityEditSchema = yup
  .object()
  .shape({
    cod: yup
      .string()
      .required('This field is required.'),
      name: yup
      .string()
      .required('This field is required.')
  })
