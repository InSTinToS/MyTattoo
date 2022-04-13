import { TExecute } from './ReadUsers.types'

import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

import { inject, injectable } from 'tsyringe'

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
