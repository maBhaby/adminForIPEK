import { makeAutoObservable } from 'mobx'
import AuthApiService from '@/api/services/Auths/index'
import { IUserData } from '@/interfaces'
import Cookies from 'js-cookie'

import { signInWithEmailAndPassword, onAuthStateChanged, signOut, Auth } from 'firebase/auth'
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
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          // console.log(response);
          this.user = {
            email: response.user.email
          }
          after()
        })
        .catch((res) => {
          err(res)
        })
    } catch (e: any) {
      throw new Error(e)
    }
  }

  async checkLogin (succes: () => void, error: () => void) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = {
          email: auth.currentUser?.email
        }
        succes()
      } else {
        error()
      }
    })
  }

  async logout (succes: () => void, error: () => void): Promise<void> {
    signOut(auth).then(() => {
      succes()
    }).catch((error) => {
      error()
    });
  }
}

export const userStore = new User()
