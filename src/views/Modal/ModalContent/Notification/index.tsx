import { IModalsBase } from '@/interfaces'
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
import { FC } from 'react'

interface IUserDataModal extends IModalsBase {}

const NotificationModal: FC<IUserDataModal> = ({
  closeModal,
  isOpen,
  modalProps
}) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalProps?.text && modalProps.text}</ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' onClick={closeModal}>
            Закрыть
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NotificationModal
