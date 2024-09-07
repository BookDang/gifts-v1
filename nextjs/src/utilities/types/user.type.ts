import { Gender } from '@/utilities/enums/user.enum'

export type TUser = {
  _id?: string
  name: string
  username: string
  email: string
  password: string
  gender: Gender
}
