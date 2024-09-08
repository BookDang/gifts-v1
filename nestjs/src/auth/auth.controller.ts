import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common'
import { Response } from 'express'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { LoginDto } from '@/auth/dto/login.dto'
import { TResponse } from 'utilities/types/responses.type'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const response: TResponse<string> = await this.authService.login(loginDto)
    const dateNow = Date.now()
    const expires = new Date(dateNow + 180 * 1000)
    if (response.status === 200 && response.data) {
      res.cookie('access_token', response.data, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        expires,
        sameSite: 'strict',
      })
    }
    console.log('expires', dateNow + 180 * 1000, dateNow)
    const newResponse = {
      message: response.message || '',
      dateNow,
      access_token: response.data,
      status: response.status,
      data: {
        access_token: response.data,
      },
    }
    return res.status(response.status).json(newResponse)
  }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto)
  }

  @Get()
  findAll() {
    return this.authService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id)
  }
}
