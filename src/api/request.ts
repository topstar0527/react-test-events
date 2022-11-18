import axios, { Method, AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` },
})

const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> =>
  api.request<T>({
    method,
    url,
    params,
  })

export default request
