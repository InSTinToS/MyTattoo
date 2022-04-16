import type { TExecute } from './ReadUsers.types'

import { inject, injectable } from 'tsyringe'

import type { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

@injectable()
class ReadUsersService {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}

  execute: TExecute = async id => {
    const Users = id
      ? await this.UsersRepository.findById(id)
      : await this.UsersRepository.findAll()

    return Users
  }
}

export { ReadUsersService }
