import { makeAutoObservable } from 'mobx'
import AuthApiService from '@/api/services/Auths/index'
import { IUserData } from '@/interfaces'
import Cookies from 'js-cookie'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

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

  async login (email: string, password: string, after:any, err: any): Promise<void> {
    try {
      // const response = await AuthApiService.login(email, password)
      // Cookies.set('token', response.data)

      // const user = await AuthApiService.userData()
      // console.log(user)

      // this.setAuth(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response);
          this.user = {
            email: response.user.email
          }
          after()
        })
        .catch((res) => {
          err()
        })
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
