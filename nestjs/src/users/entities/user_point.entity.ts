import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm'
import { User } from '@/users/entities/user.entity'

@Entity('user_points')
export class UserPoint {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, (user) => user.userPoints, { onDelete: 'CASCADE' })
  user: User

  @Column({ type: 'int', unsigned: true, default: 0 })
  availablePoints: number

  @Column({ type: 'int', unsigned: true, default: 0 })
  transferablePoints: number

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
