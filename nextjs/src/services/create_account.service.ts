import axios, { AxiosResponse } from 'axios'
import { TUser } from '@/utilities/types/user.type'

interface ICreateAccountResponse {
  message: string
  status: number
  data: any
}

class CreateAccountService {
  async createAccount(
    data: TUser,
  ): Promise<AxiosResponse<ICreateAccountResponse>> {
    try {
      const response = await axios.post<ICreateAccountResponse>(
        '/api/users',
        data,
      )
      return response
    } catch (error) {
      throw error
    }
  }
}

export default CreateAccountService
