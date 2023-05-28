import { FC } from 'react'

import useSWR from 'swr';

import { studentApiService } from '@/api/services/student';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { IModalsBase } from '@/interfaces';

interface IUserDataModal extends IModalsBase {
}

const Create:FC<IUserDataModal> = ({ closeModal, isOpen, modalProps }) => {
  const { data } = useSWR(`api/v1/studentlist/${modalProps.id}`, studentApiService.getStudent, {
    onSuccess: () => {

    }
  })

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={closeModal}>
      <DrawerOverlay />
      <DrawerContent maxW='420px'>
        <DrawerCloseButton top='16px' />
        <DrawerHeader borderBottomWidth='1px'>Студет</DrawerHeader>
        <DrawerBody p='25px'>
          <div>sdasd</div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Create
