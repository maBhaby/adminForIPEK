import { makeAutoObservable } from 'mobx'
import { RootStore } from './Root'

type TCurrentModal = 'notification' | 'error' | 'studentAdd' | 'createPost' | null

export class ModalStore {
  currentModal: TCurrentModal
  modalProps: any
  isOpen: boolean
  rootStore: RootStore

  constructor (rootStore: RootStore) {
    makeAutoObservable(this)
    this.currentModal = null
    this.isOpen = false
    this.rootStore = rootStore
  }

  open = (modalType: TCurrentModal, modalProps?: any): void => {
    this.currentModal = modalType
    this.modalProps = modalProps
    this.isOpen = true
  }

  close = (): void => {
    this.currentModal = null
    this.isOpen = false
    this.modalProps = null
  }
}
