import ky from 'ky'
import Cookies from 'js-cookie'

const client = ky.extend({
  credentials: 'include',
  prefixUrl: 'http://127.0.0.1:8000',
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
