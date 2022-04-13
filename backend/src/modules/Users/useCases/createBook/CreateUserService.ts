import { TExecute } from './CreateUser.types'

import { UserModel } from '@modules/Users/models/UserModel'
import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

import { inject, injectable } from 'tsyringe'

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}

  execute: TExecute = async data => {
    const newUser = new UserModel()

    Object.assign(newUser, data)

    const createdUser = await this.UsersRepository.create(newUser)

    return createdUser
  }
}

export { CreateUserService }
