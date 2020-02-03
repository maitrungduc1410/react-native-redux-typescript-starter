import axios from 'axios'
import env from '@/env'
import { AxiosResponse, AxiosError } from 'axios'

const http = axios.create({
  baseURL: env.baseUrl,
})

http.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error: AxiosError) => {
  return Promise.reject(error)
})

export default http
