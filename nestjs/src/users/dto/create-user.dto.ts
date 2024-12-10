import { Gender, Roles } from '@/enums/user.roles'
import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @Length(1, 100)
  @IsString()
  fullname: string

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender

  @IsEmpty()
  @IsEmail()
  email: string

  @IsEmpty()
  @Length(10, 15)
  phone_number: string

  @IsEmpty()
  @Length(10, 15)
  gruardian_phone_number: string

  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles
}
