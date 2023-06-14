/**
 * Import all your stores
 */
//
import { ModalStore } from './ModalStore'
import { AuthApi } from '@/api/services/auth'

/**
* Root Store Class with
*/
export class RootStore {
  ModalStore: ModalStore
  constructor () {
    this.ModalStore = new ModalStore(this)
    // [INIT]
    // this.UsersListStore.fetchUserList()

    AuthApi.csrftoken()
  }
}
