import { FC } from "react";

import { FormikProps } from "formik";
import { IStudentData } from "@/api/services/student";

import { Box, Button } from "@chakra-ui/react";
import Input from "../Input";

const leftInputs = [
  {
    id: 1,
    label: "Имя",
    type: "text",
    name: "fist_name"
  },
  {
    id: 2,
    label: "Фамилия",
    type: "text",
    name: "last_name"
  },
  {
    id: 3,
    label: "E-mail",
    type: "text",
    name: "email"
  },
  {
    id: 4,
    label: "День рождения",
    type: "date",
    name: "birthday"
  },
  {
    id: 9,
    label: "Телефон",
    type: "tel",
    name: "telephone"
  },
];

const rightInputs = [
  {
    id: 5,
    label: "Отчество",
    type: "text",
    name: "patronymic"
  },
  {
    id: 6,
    label: "Место регистрации",
    type: "text",
    name: "place_registration"
  },
  {
    id: 7,
    label: "Место жительства",
    type: "text",
    name: "place_residence"
  },
  {
    id: 8,
    label: "Год поступления",
    type: "date",
    name: "year_receipt"
  },
];

interface IProp {
  formikTools: FormikProps<IStudentData>
}

const StudentEditView: FC<IProp> = ({formikTools}) => {
  const { handleChange, handleBlur, values, touched, errors } =
    formikTools;
  return (
    <>
      <Box display="flex" gap="20px">
        <Box
          boxShadow="base"
          w="65%"
          p="20px 30px 30px 30px"
          borderRadius="10px"
          bgColor="white"
          display="flex"
          gap="20px"
          flexDirection="column"
        >
          {leftInputs.map(
            ({ id, label, type, name }) => (
              <Input
                key={id}
                label={label}
                type={type}
                touched={touched[name]}
                name={name}
                error={errors[name]}
                value={values[name]}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            )
          )}
        </Box>
        <Box
          boxShadow="base"
          w="35%"
          p="20px 30px 30px 30px"
          borderRadius="10px"
          bgColor="white"
          display="flex"
          gap="20px"
          flexDirection="column"
        >
          {rightInputs.map(
            ({ id, label, type, name}) => (
              <Input
                key={id}
                label={label}
                type={type}
                touched={touched[name]}
                error={errors[name]}
                value={values[name]}
                name={name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            )
          )}
        </Box>
      </Box>
      <Box display="flex" justifyContent="right" mt="20px">
        <Button type="submit">Сохранить</Button>
      </Box>
    </>
  );
};

export default StudentEditView
