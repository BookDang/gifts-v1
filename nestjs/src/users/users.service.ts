import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import { User, UserDocument } from '@/users/schemas/user.schema'
import { Model } from 'mongoose'
import { TResponse } from 'utilities/types/responses.type'
import { SALT_ROUNDS } from 'utilities/constants/user.constants'
import { CreateUserDto } from '@/users/dto/create-user.dto'
import { UpdateUserDto } from '@/users/dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<TResponse<any>> {
    try {
      const existingUser = await this.userModel.findOne({
        email: createUserDto.email,
      })
      if (existingUser) {
        return {
          message: 'Email already exists',
          status: HttpStatus.CONFLICT,
        }
      }
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        SALT_ROUNDS,
      )
      const user = await this.userModel.create({
        ...createUserDto,
        password: hashedPassword,
      })

      if (!user) {
        return {
          message: 'User not created',
          status: HttpStatus.BAD_REQUEST,
        }
      }

      return {
        message: 'User created successfully',
        status: HttpStatus.NO_CONTENT,
      }
    } catch (error) {
      return {
        message: error.message,
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      }
    }
  }

  async findOneByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ username })
  }

  findAll() {
    return `This action returns all users`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
