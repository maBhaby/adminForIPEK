import * as yup from 'yup'

export const PreparationEditSheme = yup
  .object()
  .shape({
    number_educational_building: yup
      .string()
      .trim()
      .test('len', 'Поле должно быть не больше 2 символов', (val) => {
        if (val) {
          return val.toString().length <= 2
        } return false
      })
      .required('Обязательное поле.'),
    level_preparation_PPCCZ: yup
      .string()
      .trim()
      .test('len', 'Поле должно быть не больше 5 символов', (val) => {
        if (val) {
          return val.toString().length <= 5
        } return false
      })
      .required('Обязательное поле.')
  })
