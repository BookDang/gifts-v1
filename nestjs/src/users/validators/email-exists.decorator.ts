import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from '@/users/schemas/user.schema'

@Injectable()
@ValidatorConstraint({ name: 'IsUniqueEmail', async: true })
export class IsEmailExistsConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async validate(value: any, args: ValidationArguments) {
    const filter = {}

    filter[args.property] = value
    const user = await await this.userModel.findOne({ email: value })
    return !user
  }

  defaultMessage(args: ValidationArguments) {
    return `User with this email already exists`
    // return `User with this ${args.property} already exists`
  }
}
