import axios, { AxiosInstance } from 'axios'

export default class BaseApi {
  axios: AxiosInstance
  constructor (api: string) {
    this.createHttpInstance(api)
  }
  //! РАСКОМЕНТЬ ДЛЯ ПОЛУЧЕНИЯ
  private async createHttpInstance (api: string): Promise<void> {
    this.axios = axios.create({
      baseURL: api,
      xsrfCookieName: `csrftoken`,
      xsrfHeaderName: `X-CSRFToken `
    })
  }
}
