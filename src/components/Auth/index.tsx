import React, { FC } from "react";
import AuthView from "@/views/Auth";
import { useFormik } from "formik";

const Auth: FC = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      passWord: "",
    },
    onSubmit: (values) => {
      setTimeout(() => console.log("first"), 2000);
    },
  });
  return <AuthView formik={formik} />;
};

export default Auth;
