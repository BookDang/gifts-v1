import { TLogin } from '@/utilities/types/login.type'
import axios, { AxiosResponse } from 'axios'

class LoginService  {
  async login(credentials: TLogin): Promise<AxiosResponse> {
    try {
      const response = await axios.post<AxiosResponse>(
        '/api/login',
        credentials,
      )
      return response
    } catch (error) {
      throw error
    }
  }

  async logout(): Promise<void> {
    try {
      await axios.post('/api/logout')
    } catch (error) {
      throw error
    }
  }
}

export default LoginService
