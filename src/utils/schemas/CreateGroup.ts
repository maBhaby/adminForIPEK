import * as yup from "yup";

export const GroupEditPage = yup.object().shape({
  colleague: yup
    .string()
    .trim()
    .required("Обязательное поле"),
  form_education: yup
    .string()
    .trim()
    .required("Обязательное поле"),
  number: yup
    .string()
    .trim()
    .required("Обязательное поле"),
  plan: yup.string().trim().required("Обязательное поле"),
  school_graduation_class: yup.string().trim().required("Обязательное поле"),
  speciality: yup.string().trim().required("Обязательное поле"),
  year_receipt: yup.string().trim().required("Обязательное поле"),
});
