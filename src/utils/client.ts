import axios from 'axios'
import ky from 'ky'
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true

// const client = axios.create({
//   baseURL: 'http://localhost:8000'
// })

const client = ky.extend({
  credentials: 'include',
  prefixUrl: 'http://localhost:8000',
  headers: {
    Accept: 'application/json'
  },
  hooks: {
    beforeRequest: [
      request => {
        const csrf = Cookies.get('XSRF-TOKEN')
        if (csrf !== undefined) {
          request.headers.set('X-XSRF-TOKEN', csrf)
        }
      }
    ]
  }
})

export default client
