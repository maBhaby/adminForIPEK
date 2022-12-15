/* eslint-disable */
import axios from 'axios'

export const $api = axios.create({
  withCredentials: true,
  baseURL: 'https://vcssn-staging.laont.me'
})

$api.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config
})

export default $api
