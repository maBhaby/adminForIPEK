import { makeAutoObservable } from 'mobx'
import AuthApiService from '@/api/services/Auth'
import { IUserData } from '@/interfaces'
import Cookies from 'js-cookie'

class User {
  user = {}
  isAuth: boolean = false
  constructor () {
    makeAutoObservable(this)
  }

  setAuth (bool: boolean): void {
    this.isAuth = bool
  }

  setUser (user: IUserData): void {
    this.user = user
  }

  async login (email: string, password: string): Promise<void> {
    try {
      const response = await AuthApiService.login(email, password)
      Cookies.set('token', response.data)

      const user = await AuthApiService.userData()
      console.log(user)

      this.setAuth(true)
    } catch (e: any) {
      throw new Error(e)
    }
  }

  async logout (): Promise<void> {
    try {
      const response = await AuthApiService.logout()
      Cookies.remove('token', response)
      this.setAuth(false)
    } catch (e: any) {
      throw new Error(e)
    }
  }
}

export const userStore = new User()
