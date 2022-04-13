import { UsersRepository } from '@modules/Users/repositories/User/UserRepository'
import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)
