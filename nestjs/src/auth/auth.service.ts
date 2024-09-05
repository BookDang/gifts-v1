import { HttpStatus, Injectable } from '@nestjs/common'
import { compare } from 'bcrypt'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { UsersService } from '@/users/users.service'
import { LoginDto } from '@/auth/dto/login.dto'
import { User } from '@/users/schemas/user.schema'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async login(loginDto: LoginDto) {
    const user: User | null = await this.userService.findOneByUsername(
      loginDto.username,
    )
    if (!user) {
      return {
        message: 'User does not exist',
        status: HttpStatus.NOT_FOUND,
      }
    }

    const isPasswordValid = await compare(loginDto.password, user.password)
    if (!isPasswordValid) {
      return {
        message: 'Invalid password',
        status: HttpStatus.UNAUTHORIZED,
      }
    }
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth'
  }

  findAll() {
    return `This action returns all auth`
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`
  }

  remove(id: number) {
    return `This action removes a #${id} auth`
  }
}
