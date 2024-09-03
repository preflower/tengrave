/* eslint-disable @typescript-eslint/no-explicit-any */
/** ignore all any define in this file */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import i18n from '@/i18n'

interface Response<T = any> {
  success: boolean
  data: T
  code: number
  message?: string
}

export class ResponseError<T = any> extends Error {
  message: string
  data: T | undefined
  code: number | undefined

  constructor (message?: string, code?: number, data?: T) {
    const _message = message ?? i18n.t('common.error.network')
    super(_message)
    this.name = 'ResponseError'

    this.message = _message
    this.data = data
    this.code = code
  }
}

interface Instance extends AxiosInstance {
  <T, R = Response<T>>(config: AxiosRequestConfig): Promise<R>
  <T, R = Response<T>>(url: string, config?: AxiosRequestConfig): Promise<R>
  request: <T, R = Response<T>>(config: AxiosRequestConfig) => Promise<R>
  get: <T, R = Response<T>>(url: string, config?: AxiosRequestConfig) => Promise<R>
  delete: <T, R = Response<T>>(url: string, config?: AxiosRequestConfig) => Promise<R>
  head: <T, R = Response<T>>(url: string, config?: AxiosRequestConfig) => Promise<R>
  post: <T, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig) => Promise<R>
  put: <T, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig) => Promise<R>
  patch: <T, R = Response<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig) => Promise<R>
}

const instance: Instance = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_DOMAIN,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(async (res) => {
  const { data: { data, code, message } } = res as AxiosResponse<Response>
  const isInternalError = code !== 10000
  if (isInternalError) {
    throw new ResponseError(message, code, data)
  } else {
    return data
  }
})

export default instance
