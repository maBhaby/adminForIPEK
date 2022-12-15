import { $api } from '@/api'
import { AxiosResponse } from 'axios'
import { AuthResponse } from '@/interfaces'

export default class AuthApiService {
  lint: string = ''
  constructor (lintEx: string) {
    this.lint = lintEx
  }

  static async login (email: string, password: string): Promise<AxiosResponse> {
    return await $api.post<AuthResponse>('/api/v2/login', { email, password })
  }
}
