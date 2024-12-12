import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common'
import { Response } from 'express'
import { UsersService } from '@/users/users.service'
import { CreateUserDto } from '@/users/dto/create-user.dto'
import { responseError } from '@/utilities/response'
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createNewUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    try {
      const user = await this.usersService.createNewUser(createUserDto)
      res.status(HttpStatus.CREATED).jsonp({
        data: user,
        statusCode: HttpStatus.CREATED,
      })
    } catch (error) {
      responseError(res, error)
    }
  }

  @Get('all-active-users')
  async findAllUsers(@Res() res: Response) {
    try {
      const allActiveUsers = await this.usersService.findAllActiveUsers()
      res.status(HttpStatus.OK).jsonp({
        data: allActiveUsers,
        statusCode: HttpStatus.OK,
      })
    } catch (error) {
      responseError(res, error)
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string, @Res() res: Response) {
    try {
      const result = await this.usersService.deleteUserById(+id)
      if (!result) {
        throw new Error('404')
      }
      res.status(HttpStatus.OK).jsonp({
        data:  {
          message: 'User deleted successfully',
          userId: +id
        },
        statusCode: HttpStatus.OK,
      })
    } catch (error) {
      responseError(res, error)
    }
  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
