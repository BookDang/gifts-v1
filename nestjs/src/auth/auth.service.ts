import { HttpStatus, Injectable } from '@nestjs/common'
import { compare } from 'bcrypt'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { UsersService } from '@/users/users.service'
import { LoginDto } from '@/auth/dto/login.dto'
import { JwtService } from '@nestjs/jwt'
import { UserDocument } from '@/users/schemas/user.schema'
import { TResponse } from 'utilities/types/responses.type'
import { JWT_EXPIRES_IN } from 'utilities/constants/user.constants'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<TResponse<string>> {
    const user: UserDocument | null = await this.userService.findOneByUsername(
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

    const payload = {
      id: user._id,
      username: user.username,
    }

    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: JWT_EXPIRES_IN,
    })

    return {
      message: 'Login successful',
      status: HttpStatus.OK,
      data: access_token,
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
