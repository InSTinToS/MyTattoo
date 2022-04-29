import { CreateUserService } from '../createUser/CreateUserService'
import { IRequest } from '../createUser/CreateUser.types'

import { AppError } from '@shared/errors/AppError'

import { UsersRepositoryInMemory } from '@modules/Users/repositories/User/UserRepositoryInMemory'
import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

let usersRepository: IUsersRepository
let createUserService: CreateUserService

describe('CreateUserService', () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory()
    createUserService = new CreateUserService(usersRepository)
  })

  it('should be able to create a user', async () => {
    const createUserData: IRequest = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    const { id } = await createUserService.execute(createUserData)

    const foundUser = await usersRepository.findById(id)

    expect(foundUser.username).toBe(createUserData.username)
  })

  it('should not be able to create a user if email already exists', async () => {
    const createUserData: IRequest = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    const createSecondUserData: IRequest = {
      username: 'InSTinToS2',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    await createUserService.execute(createUserData)

    expect(
      createUserService.execute(createSecondUserData)
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to create a user if username already exists', async () => {
    const createUserData: IRequest = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    await createUserService.execute(createUserData)

    const createSecondUserData: IRequest = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'InSTinToS2@instintos.com'
    }

    expect(
      createUserService.execute(createSecondUserData)
    ).rejects.toBeInstanceOf(AppError)
  })
})
