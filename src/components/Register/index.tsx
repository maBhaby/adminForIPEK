import { Box, Button, Flex } from "@chakra-ui/react";
import CustomInput from "@/views/Input";
import { useFormik } from "formik";

const inputs = [
  {
    name: "userName",
    label: "Аккаунт",
    type: "text",
    id: 0,
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    id: 1,
  },
  {
    name: "resPassword",
    label: "Повторите пароль",
    type: "password",
    id: 2,
  },
];

const Register = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      resPassword: "",
    },
    onSubmit: (value) => {console.log(value)},
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = formik 

  return (
    <form style={{ width: '100%', maxWidth: '500px', margin: '60px auto 0px' }} onSubmit={handleSubmit}>
      <Flex w='100%' direction="column">
        {inputs.map(({id, name, label , type}) => (
          <Box mt='20px' key={id}>
            <CustomInput 
              name={name}
              type={type}
              label={label}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors[name]}
              touched={touched[name]}
              value={values[name]}
            />
          </Box>
        ))}
        <Button mt='20px' type='submit' colorScheme='blue'>Зарегайся</Button>
      </Flex>
    </form>
  );
};

export default Register;
