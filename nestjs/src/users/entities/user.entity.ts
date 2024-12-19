import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Gender, Roles } from '@/enums/user.roles'
import { UserPoint } from '@/users/entities/user_point.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  @Index()
  fullname: string

  @Column({ type: 'enum', enum: Gender, default: Gender.MELE})
  gender: Gender

  @Column({
    length: 150,
    unique: true,
    nullable: true,
  })
  email: string

  @Column({
    length: 15,
    unique: true,
    nullable: true,
  })
  phone_number: string

  @Column({ length: 15, nullable: true })
  guardian_phone_number: string

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.USER,
  })
  role: Roles

  @Column({ type: 'boolean', default: () => '1' })
  is_active: boolean

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @Column('datetime', { nullable: true })
  deleted_at: Date
  
  @OneToMany(() => UserPoint, (userPoint) => userPoint.user)
  userPoints: UserPoint[]
}
