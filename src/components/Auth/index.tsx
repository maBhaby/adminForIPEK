import { FC } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";

import { userStore } from "@/store/user";

import { loginSchema } from "@/utils/schemas/login-schema";
import { AuthApi } from "@/api/services/auth";

import AuthView from "@/views/Auth";

const Auth: FC = observer(() => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      userStore.login(
        values.username,
        values.password,
        () => {
          navigate("/");
        },
        () => {
          console.log("err");
        }
      );
    },
  });

  return <AuthView formik={formik} />;
});

export default Auth;
