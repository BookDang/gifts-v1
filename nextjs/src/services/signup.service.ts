import axios, { AxiosResponse } from 'axios'
import { TUser } from '@/utilities/types/user.type'

interface ISignupResponse {
  message: string
  status: number
  data: any
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
      throw error
    }
  }
}

export default SignupService
