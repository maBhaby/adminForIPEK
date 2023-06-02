import { FC } from 'react'

import useSWR from 'swr'
import { useFormik } from 'formik'

import { ColleagueApi } from '@/api/services/colleague'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { IModalsBase } from '@/interfaces'
import Input from '@/views/Input'
import Loader from '@/views/Loader'

interface IUserDataModal extends IModalsBase {}

const CreatePosts: FC<IUserDataModal> = ({
  closeModal,
  isOpen,
  modalProps
}) => {
  const { data, isLoading } = useSWR(
    'api/v1/Colleaguelist/',
    ColleagueApi.getPositions
  )
  console.log(data)

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: (value) => {
      debugger
      ColleagueApi.setPosition(value)
        .then((res) => {
          console.log(res)
        })
        .catch((res) => {
          console.log(res)
        })
    }
  })

  if (isLoading) return <Loader />

  const { values, handleSubmit, handleBlur, handleChange } = formik
  console.log(formik)

  return (
    <form>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создать должность</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name='name'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              type='text'
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeModal}>
              Закрыть
            </Button>
            <Button onClick={handleSubmit} type='submit'>Сохранить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  )
}

export default CreatePosts
