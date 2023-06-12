import { FC, useState, useEffect } from "react";

import useSWR from "swr";
import { useFormik } from "formik";

import { studentApiService } from "@/api/services/student";
import { ColleagueApi } from "@/api/services/colleague";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Box,
  DrawerFooter,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { IModalsBase } from "@/interfaces";
import Loader from "@/views/Loader";

// import Input from '@/views/Input'

interface IUserDataModal extends IModalsBase {}

const init = {
  students: [
    {
      fist_name: "le",
      last_name: "le",
      patronymic: "le",
      id: 0,
      inGroup: false,
    },
  ],
};

const Create: FC<IUserDataModal> = ({ closeModal, isOpen, modalProps }) => {
  const { data, isLoading } = useSWR(
    "api/v1/studentlist/",
    studentApiService.getStudentList
  );

  const [defData, setDefData] = useState({});
  console.log(modalProps);

  const formik = useFormik({
    initialValues: defData,
    enableReinitialize: true,
    onSubmit: (value: any) => {
      console.log(value);
      const res = value?.students
        .filter((el: any) => {
          if (el.inGroup) {
            return el.id;
          }
        })
        .map((el: any) => el.id);
      console.log(res);
      ColleagueApi.changeColleague(modalProps.id, res);
    },
  });

  useEffect(() => {
    if (data) {
      const defaultValue = data.students.filter(
        (el) => !modalProps.studentId.includes(el.id)
      );
      setDefData({ students: defaultValue });
    }
  }, [data]);

  const { values, handleSubmit, handleBlur, handleChange, setFieldValue } =
    formik;
  console.log(formik);

  const handleChangeCheckbox = (e: any, i: any) => {
    debugger;
    setFieldValue(`students[${i}].inGroup`, e.target.checked);
  };

  if (isLoading) return <Loader />;

  if (!data) return <Box>null</Box>;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={closeModal}>
      <DrawerOverlay />
      <form onSubmit={handleSubmit}>
        <DrawerContent maxW="420px">
          <DrawerCloseButton top="16px" />
          <DrawerHeader borderBottomWidth="1px">Студет</DrawerHeader>
          <DrawerBody p="25px">
            {values?.students?.map((el: any, i: number) => (
              <Flex justifyContent="space-between" gap="5px" key={i}>
                <Flex fontSize="18px" gap="5px">
                  <span>{el.fist_name}</span>
                  <span>{el.last_name}</span>
                  <span>{el.patronymic}</span>
                </Flex>
                <Checkbox
                  size="lg"
                  onChange={(e) => {
                    handleChangeCheckbox(e, i);
                  }}
                />
              </Flex>
            ))}
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="blue">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
};

export default Create;
/**
 *
 *
 *
 */
