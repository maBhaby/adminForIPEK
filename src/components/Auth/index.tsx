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
import { useStores } from "@/hooks/useStore";

const getErr = (string: string) => {
  const obj = {
    'Firebase: Error (auth/user-not-found).': 'Не существует такого юзера',
    'Firebase: Error (auth/wrong-password).': 'Не правильный пароль'
  }

  return obj[string] || 'что то не так'
}

const Auth: FC = observer(() => {
  const store = useStores()

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
        (err) => {
          store.ModalStore.open('error', {text: getErr(err.message)})
          console.log(err.message);
        }
      );
    },
  });

  return <AuthView formik={formik} />;
});

export default Auth;
