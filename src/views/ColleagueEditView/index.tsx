import { FC } from "react";
import { FormikProps } from "formik";

import { TColleague } from "@/api/services/colleague";

import { Box, Button } from "@chakra-ui/react";
import Input from "../Input";

interface IProp {
  formik: FormikProps<TColleague>;
}

const inputs = [
  {
    id: 1,
    label: "Имя",
    type: "text",
    name: "fist_name",
  },
  {
    id: 2,
    label: "Фамилия",
    type: "text",
    name: "last_name",
  },
  {
    id: 3,
    label: "E-mail",
    type: "text",
    name: "patronymic",
  },
  {
    id: 4,
    label: "Должность",
    type: "text",
    name: "post",
  },
  {
    id: 9,
    label: "Телефон",
    type: "tel",
    name: "telephone",
  },
];

const ColleagueEditView: FC<IProp> = ({ formik }) => {
  const { handleBlur, handleChange, values, errors, touched } = formik;

  return (
    <Box
      boxShadow="base"
      p="20px 30px 30px 30px"
      borderRadius="10px"
      bgColor="white"
      display="flex"
      gap="20px"
      flexDirection="column"
    >
      {inputs.map(({id, label, type, name}) => {
        return (
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
        );
      })}
      <Box>
        <Button type='submit'>Сохранить</Button>
      </Box>
    </Box>
  );
};

export default ColleagueEditView
