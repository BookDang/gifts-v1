import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { CreateUserDto } from '@/users/dto/create-user.dto'
import { User as UserEntity } from '@/users/entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createNewUser(
    createUserDto: CreateUserDto,
  ): Promise<Omit<UserEntity, 'deleted_at'> | Error> {
    try {
      const user = this.usersRepository.create(createUserDto)
      return await this.usersRepository.save(user)
    } catch (error) {
      if (error.message.includes('Duplicate entry')) {
        throw new Error('409')
      }
      throw new Error(error.message)
    }
  }
}
