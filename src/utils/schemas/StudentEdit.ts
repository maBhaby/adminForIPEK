import * as yup from "yup";

export const StudentEditShema = yup.object().shape({
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
  birthday: yup
    .string()
    .trim()
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
  place_registration: yup
    .string()
    .trim()
    .required("Обязательное поле"),
  place_residence: yup
    .string()
    .trim()
    .required("Обязательное поле"),
  year_receipt: yup
    .string()
    .trim()
    .required("Обязательное поле"),
});
