import { $api } from '@/api'
import { AxiosResponse } from 'axios'
import { IUserData } from '@/interfaces'

export default class AuthApiService {
  lint: string = ''
  constructor (lintEx: string) {
    this.lint = lintEx
  }

  static async login (email: string, password: string): Promise<AxiosResponse<string>> {
    return await $api.post<string>('/accounts/login/', { email, password })
  }

  // todo:нормальный тип
  static async userData (): Promise<AxiosResponse> {
    return await $api.get<IUserData>('api/v2/auth/me')
  }

  static async logout (): Promise<AxiosResponse> {
    return await $api.post('api/v2/auth/logout')
  }
}
