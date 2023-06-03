import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie';

export default class BaseApi {
  axios: AxiosInstance
  constructor (api: string) {
    this.createHttpInstance(api)
  }

  private async createHttpInstance (api: string): Promise<void> {
    // const csrftoken = await fetch(`${api}api/v1/csrf_cookie/`)
    // console.log('csrftoken', csrftoken);
    this.axios = axios.create({
      baseURL: api,
      xsrfCookieName: 'csrftoken',
      xsrfHeaderName: 'X-CSRFToken'
    })
  }
}
