import * as yup from 'yup'

export const CreatePostShema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, 'Длинна не может быть менее 2 символов')
    .required('Обязательное поле'),
})