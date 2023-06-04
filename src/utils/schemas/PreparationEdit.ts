import * as yup from 'yup'

export const PreparationEdit = yup
  .object()
  .shape({
    number_educational_building: yup
      .string()
      .min(1, 'мин 1')
      .max(5, 'мак 5')
      .required('This field is required.'),
    level_preparation_PPCCZ: yup
      .string()
      .required('This field is required.')
  })
