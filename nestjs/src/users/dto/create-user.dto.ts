import { Gender, Roles } from '@/enums/user.roles'
import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator'
import { IsNull } from 'typeorm'

export class CreateUserDto {
  @IsNotEmpty()
  @Length(1, 100)
  @IsString()
  fullname: string

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender

  @IsOptional()
  @IsEmail()
  email: string

  @IsOptional()
  @Length(10, 15)
  phone_number?: string

  @IsOptional()
  @Length(10, 15)
  guardian_phone_number?: string

  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles
}
