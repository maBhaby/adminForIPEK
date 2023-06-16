import axios, { AxiosInstance } from 'axios'

export default class BaseApi {
  axios: AxiosInstance
  constructor (api: string) {
    this.createHttpInstance(api)
  }
  //! РАСКОМЕНТЬ ДЛЯ ПОЛУЧЕНИЯ
  private async createHttpInstance (api: string): Promise<void> {
    fetch(`${api}api/v1/csrf_cookie`)
    this.axios = axios.create({
      baseURL: api,
      xsrfCookieName: `csrftoken`,
      xsrfHeaderName: `X-CSRFToken `
    })
  }
}
