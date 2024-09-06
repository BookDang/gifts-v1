export type TResponse<T> = {
  message: string
  status: number
  data?: T
}