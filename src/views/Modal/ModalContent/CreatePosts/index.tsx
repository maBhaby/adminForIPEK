import { FC, useState } from "react";

import useSWR from "swr";
import { useFormik } from "formik";

import { ColleagueApi } from "@/api/services/colleague";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { IModalsBase } from "@/interfaces";
import Input from "@/views/Input";
import Loader from "@/views/Loader";
import { CreatePostShema } from "@/utils/schemas/CreatePostShema";

interface IUserDataModal extends IModalsBase {}

const CreatePosts: FC<IUserDataModal> = ({
  closeModal,
  isOpen,
  modalProps,
}) => {
  const [isCreate, setIsCreate] = useState(false);
  const { data, isLoading } = useSWR(
    "api/v1/Colleaguelist/",
    ColleagueApi.getPositions
  );
  console.log(data);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: CreatePostShema,
    onSubmit: (value) => {
      debugger;
      ColleagueApi.setPosition(value)
        .then((res) => {
          setIsCreate(true);
          setTimeout(() => {
            setIsCreate(false);
          }, 3000);
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    },
  });

  if (isLoading) return <Loader />;

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } = formik;
  console.log(formik);

  return (
    <form>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создать должность</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              error={errors.name}
              touched={touched.name}
              type="text"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Закрыть
            </Button>
            <Button
              onClick={handleSubmit}
              bgColor={isCreate ? "green.400" : "#EDF2F7"}
              type="submit"
            >
              Сохранить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default CreatePosts;
