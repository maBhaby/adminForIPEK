import { makeAutoObservable } from "mobx";
import { RootStore } from "./Root";

export class ModalStore {
  currentModal: 'error' | 'create' | null
  modalProps: any
  isOpen: boolean
  rootStore: RootStore

  constructor (rootStore: RootStore) {
    makeAutoObservable(this)
    this.currentModal = null
    this.isOpen = false
    this.rootStore = rootStore
  }

  open = (modalType: 'error' | 'create' | null, modalProps?: any): void => {
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