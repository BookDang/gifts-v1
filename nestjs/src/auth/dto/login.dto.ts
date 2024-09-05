import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator'

export class LoginDto {
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  username: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(30)
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
    {
      message:
        'Password must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character',
    },
  )
  password: string
}
