import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '@/users/schemas/user.schema'
import { IsUserExistsConstraint } from '@/users/validators/user-exists.decorator'
import { IsEmailExistsConstraint } from '@/users/validators/email-exists.decorator'
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, IsUserExistsConstraint, IsEmailExistsConstraint],
  exports: [UsersService],
})
export class UsersModule {}
