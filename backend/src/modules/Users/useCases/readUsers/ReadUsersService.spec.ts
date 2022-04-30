import { ReadUsersService } from './ReadUsersService'

import { UsersRepositoryInMemory } from '@modules/Users/repositories/User/UserRepositoryInMemory'
import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'
import { UserModel } from '@modules/Users/entities/UserModel'

let usersRepository: IUsersRepository
let readUsersService: ReadUsersService

describe.only('ReadUsersService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    readUsersService = new ReadUsersService(usersRepository)
  })

  it('should be able to read a user using id', async () => {
    const createUserData: UserModel = {
      id: '1',
      updated_at: '1',
      created_at: '1',
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    await usersRepository.create(createUserData)

    const foundUser = await readUsersService.execute(createUserData.id)

    expect(foundUser.user).toMatchObject(createUserData)
  })

  it('should be able to read all users without use id', async () => {
    const createUserData: UserModel = {
      id: '1',
      updated_at: '1',
      created_at: '1',
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    const createSecondUserData: UserModel = {
      id: '1',
      updated_at: '1',
      created_at: '1',
      username: 'InSTinToS2',
      password: 'Miguel@1234',
      email: 'instintos2@instintos.com'
    }

    await usersRepository.create(createUserData)
    await usersRepository.create(createSecondUserData)

    const foundUsers = await readUsersService.execute()

    expect(foundUsers.users).toMatchObject([
      createUserData,
      createSecondUserData
    ])
  })
})
