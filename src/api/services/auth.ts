import BaseApi from '../api'
import { runtimeConfig } from '@/config'

class AuthApiService extends BaseApi {
  login = async (userData: { username: string, password: string }) => {
    const res = this.axios.post('api/v1/auth/login/', userData)
    console.log(res)
  }
}

export const AuthApi = new AuthApiService(runtimeConfig.URL)
