import axios, { AxiosError, AxiosResponse } from 'axios'
import { TUser } from '@/utilities/types/user.type'

interface ISignupResponse {
  message: string
  status: number
  data: TUser
}

class SignupService {
  async signup(
    data: TUser,
  ): Promise<AxiosResponse<ISignupResponse>> {
    try {
      const response = await axios.post<ISignupResponse>(
        '/api/users',
        data,
      )
      return response
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      throw axiosError
    }
  }
}

export default SignupService
