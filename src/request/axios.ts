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
  post: <T, R = Response<T>>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<R>
  put: <T, R = Response<T>>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<R>
  patch: <T, R = Response<T>>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<R>
}

const instance: Instance = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_DOMAIN,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  return config
})

// @ts-expect-error
instance.interceptors.response.use(async (res: AxiosResponse<Response>) => {
  const { data: { data, code, message } } = res
  const isInternalError = code !== 2000
  if (isInternalError) {
    // Toast({ message: message ?? i18n.global.t('common.error.network') })
    return await Promise.resolve({ success: false, code, message, data })
  } else {
    return await Promise.resolve({ success: true, data, code, message })
  }
}, async () => {
  // Toast({ i18n.global.t('common.error.network') })
  return await Promise.resolve({ success: false })
})

export default instance
