import type { TExecute } from './CreateUser.types'

import { AppError } from '@shared/errors/AppError'

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
    const foundUserByEmail = await this.UsersRepository.findByEmail(data.email)

    if (foundUserByEmail) throw new AppError('E-mail already exists', 400)

    const foundUserByUsername = await this.UsersRepository.findByUsername(
      data.username
    )

    if (foundUserByUsername) throw new AppError('Username already exists', 400)

    const newUser = new UserModel()

    data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync())

    Object.assign(newUser, data)

    const createdUser = await this.UsersRepository.create(newUser)

    return createdUser
  }
}

export { CreateUserService }
