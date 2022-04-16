import type { TExecute } from './CreateUser.types'

import { UserModel } from '@modules/Users/models/UserModel'

import bcrypt from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}

  execute: TExecute = async data => {
    const newUser = new UserModel()

    data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync())

    Object.assign(newUser, data)

    const createdUser = await this.UsersRepository.create(newUser)

    return createdUser
  }
}

export { CreateUserService }
