import * as yup from "yup";

export const ColleagueEditShema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Введите валидные email")
    .required("Обязательное поле"),
  fist_name: yup
    .string()
    .trim()
    .min(2, 'Длинна не может быть менее 2 символов')
    .required("Обязательное поле"),
  last_name: yup
    .string()
    .trim()
    .min(2, 'Длинна не может быть менее 2 символов')
    .required("Обязательное поле"),
  telephone: yup
    .string()
    .trim()
    .min(11, 'Длинна не может быть менее 11 символов')
    .max(14, 'Длинна не может быть более 14 символов')
    .required("Обязательное поле"),
  patronymic: yup
    .string()
    .trim()
    .min(2, 'Длинна не может быть менее 2 символов')
    .required("Обязательное поле"),
});
