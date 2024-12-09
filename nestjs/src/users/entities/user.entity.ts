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

  @Column({ type: 'boolean', default: () => '1' })
  is_active: boolean

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @Column('datetime', { nullable: true })
  deleted_at: Date
}
