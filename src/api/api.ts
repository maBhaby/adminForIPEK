import axios, { AxiosInstance } from 'axios'

export default class BaseApi {
  axios: AxiosInstance
  constructor (api: string) {
    this.createHttpInstance(api)
  }

  private createHttpInstance (api: string): void {
    this.axios = axios.create({
      baseURL: api
    })
  }
}
