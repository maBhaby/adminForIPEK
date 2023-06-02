import { FC } from 'react'

import useSWR from 'swr'
import { useFormik } from 'formik'

import { studentApiService } from '@/api/services/student'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex
} from '@chakra-ui/react'
import { IModalsBase } from '@/interfaces'
import Loader from '@/views/Loader'

import Input from '@/views/Input'

interface IUserDataModal extends IModalsBase {}

const init = {
  students: [
    {
      fist_name: 'le',
      last_name: 'le',
      patronymic: 'le',
      id: 0,
      inGroup: false
    }
  ]
}

const Create: FC<IUserDataModal> = ({ closeModal, isOpen, modalProps }) => {
  const { data, isLoading } = useSWR(
    'api/v1/studentlist/',
    studentApiService.getStudentList
  )
  console.log(data)

  const formik = useFormik({
    initialValues: data || init,
    onSubmit: (value) => {
      console.log(value)
    }
  })

  if (isLoading) return <Loader />

  const { values, handleSubmit, handleBlur, handleChange } = formik
  console.log(formik)

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={closeModal}>
      <DrawerOverlay />
      <DrawerContent maxW='420px'>
        <DrawerCloseButton top='16px' />
        <DrawerHeader borderBottomWidth='1px'>Студет</DrawerHeader>
        <DrawerBody p='25px'>
          {values.students?.map((el, i) => (
            <Flex gap='5px' key={i}>
              <span>{el.fist_name}</span>
              <span>{el.last_name}</span>
              <span>{el.patronymic}</span>
              {/* <Input
                name={`students[${i}].inGroup`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={}
              /> */}
            </Flex>
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Create
/**
 *
 *
 *
 */
