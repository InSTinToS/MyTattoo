import { TExecute } from './ReadBooks.types'

import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

import { inject, injectable } from 'tsyringe'

@injectable()
class ReadUsersService {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository
  ) {}

  execute: TExecute = async () => {
    const Users = await this.UsersRepository.findAll()

    return Users
  }
}

export { ReadUsersService }
