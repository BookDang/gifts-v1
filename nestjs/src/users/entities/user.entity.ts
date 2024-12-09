import {
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Roles } from '@/enums/roles'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  @IsNotEmpty()
  @Length(1, 100)
  @IsString()
  fullname: string

  @Column({
    length: 150,
    unique: true,
    nullable: true,
  })
  @IsEmail()
  @IsEmpty()
  email: string

  @Column({
    length: 15,
    unique: true,
    nullable: true,
  })
  @IsEmpty()
  @Length(10, 15)
  @IsString()
  phone_number: string

  @Column({ length: 15, nullable: true })
  @IsEmpty()
  @Length(10, 15)
  @IsString()
  guardian_phone_number: string

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.STUDENT,
  })
  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles

  @Column({ default: true })
  is_active: boolean

  @Column({ default: () => new Date() })
  created_at: Date

  @Column({ default: () => new Date() })
  updated_at: Date

  @Column({ default: () => null })
  deleted_at: Date
}
