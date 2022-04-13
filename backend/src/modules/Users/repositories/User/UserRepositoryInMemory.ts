import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UserModel } from '@modules/Users/models/UserModel'

class UsersRepository implements IUsersRepository {
  private Users: UserModel[] = []

  create: IUsersRepository['create'] = async data => {
    const newUser = new UserModel()

    Object.assign(newUser, data)

    this.Users.push(newUser)

    return newUser
  }

  findAll: IUsersRepository['findAll'] = async () => this.Users
}

export { UsersRepository }
