import BaseApi from '../api'
import { runtimeConfig } from '@/config'
import Cookies from 'js-cookie'

function getCookie(name) {
  let cookieValue = null;

  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();

          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

              break;
          }
      }
  }

  return cookieValue;
}

// const csrftoken = Cookies.get('csrftoken')
// console.log(document.cookie);
// alert(document.cookie)
class AuthApiService extends BaseApi {
  // public getlogin = async () => {
  //   const res = this.axios.get('api/v1/auth/login/')
  //   console.log(res)
  // }
  public login = async (userData: { username: string, password: string }) => {
    const res = this.axios.post('api/v1/auth/login/', userData)
    console.log(res)
  }

  public csrftoken = async () => {
    const csrf = await this.axios.get('api/v1/csrf_cookie') 
    console.log(Cookies.get('csrftoket'));
  }
}

export const AuthApi = new AuthApiService(runtimeConfig.URL)
