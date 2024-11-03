import axios, { AxiosInstance, AxiosResponse } from "axios"
import { AxiosAuthRefreshRequestConfig } from "axios-auth-refresh"

class HttpClient {
  baseUrl: string
  instance: AxiosInstance

  constructor() {
    this.baseUrl = "http://localhost:8081"
    this.instance = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
    })
  }

  private getUrl(endpoint: string) {
    return `${this.baseUrl}${endpoint}`
  }

  async get<T>(endpoint: string, config?: AxiosAuthRefreshRequestConfig) {
    const response = await this.instance.get<T>(this.getUrl(endpoint), config)
    return response.data
  }

  async post<T>(endpoint: string, data?: object, config?: AxiosAuthRefreshRequestConfig) {
    const response = await this.instance.post<T>(this.getUrl(endpoint), data, config)
    return response.data
  }

  async patch<T>(endpoint: string, data?: object, config?: AxiosAuthRefreshRequestConfig) {
    const response = await this.instance.patch<T>(this.getUrl(endpoint), data, config)
    return response.data
  }

  async put<T>(endpoint: string, data?: object, config?: AxiosAuthRefreshRequestConfig) {
    const response = await this.instance.put<T>(this.getUrl(endpoint), data, config)
    return response.data
  }

  async delete<T>(endpoint: string, config?: AxiosAuthRefreshRequestConfig) {
    const response = await this.instance.delete<T>(this.getUrl(endpoint), config)
    return response.data
  }
}

export function handleError(error: unknown, onError?: (error: AxiosResponse) => void) {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      if (error.response.status >= 500 && error.response.status < 600) {
        throw new Error("Đã có lỗi xãy ra. Vui lòng thử lại sau.")
      }

      onError?.(error.response)
    } else {
      throw new Error("Đã có lỗi xãy ra. Vui lòng thử lại sau.")
    }
  } else {
    throw new Error("Đã có lỗi xãy ra. Vui lòng thử lại sau.")
  }
}

const httpClient = new HttpClient()

export default httpClient
