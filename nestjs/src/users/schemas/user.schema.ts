import { Gender } from 'utilities/enums/user.enum'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Exclude } from 'class-transformer'

@Schema()
export class User {
  @Prop({ required: true })
  name: string

  @Prop({ required: true, minlength: 6, maxlength: 20 })
  username: string

  @Prop({ email: true })
  email: string

  @Prop({ required: true })
  @Exclude()
  password: string

  @Prop({ required: true })
  gender: Gender

  @Prop({ default: Date.now })
  createdAt: Date

  @Prop()
  updatedAt: Date | null

  @Prop()
  deletedAt: Date | null
}

export type UserDocument = HydratedDocument<User>

export const UserSchema = SchemaFactory.createForClass(User)

// Mock data for testing
export const mockUsers: Partial<User>[] = [
  {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'john@example.com',
    password: 'P@ssw0rd123',
    gender: 'male' as Gender,
    createdAt: new Date('2024-03-15T10:00:00Z'),
    updatedAt: null,
    deletedAt: null,
  },
  {
    name: 'Jane Smith',
    username: 'janesmith456',
    email: 'jane@example.com',
    password: 'Str0ngP@ss!',
    gender: 'female' as Gender,
    createdAt: new Date('2024-03-16T14:30:00Z'),
    updatedAt: new Date('2024-03-17T09:15:00Z'),
    deletedAt: null,
  },
]
