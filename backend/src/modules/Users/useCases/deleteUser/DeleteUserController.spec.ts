import { app } from '@shared/routes'
import { ISuperResponse } from '@shared/types/supertest'

import { connectToDB } from '@config/connectToDB'

import { Client } from 'pg'
import request from 'supertest'
import { IResponse as ICreateUserResponse } from '../createUser/CreateUser.types'
import { IResponse as IDeleteUserResponse } from '../deleteUser/DeleteUser.types'
import { IResponse as IReadUsersResponse } from '../readUsers/ReadUsers.types'

let dbConnection: Client

describe('DeleteUserController', () => {
  beforeAll(async () => {
    dbConnection = await connectToDB()
  })

  afterAll(async () => {
    await dbConnection.end()
  })

  it('should be able to delete a user', async () => {
    const userToCreate = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    const createdResponse: ISuperResponse<ICreateUserResponse> = await request(
      app
    )
      .post('/users')
      .send(userToCreate)

    const deletedResponse: ISuperResponse<IDeleteUserResponse> = await request(
      app
    ).delete(`/users/${createdResponse.body.createdUser.id}`)

    const foundDeletedUser: ISuperResponse<IReadUsersResponse> = await request(
      app
    ).get(`/users/${deletedResponse.body.deletedUser.id}`)

    expect(foundDeletedUser.body.user).toBe(undefined)
  })

  it('should not be able to delete a non-existing user', async () => {
    const deletedResponse: ISuperResponse<IDeleteUserResponse> = await request(
      app
    ).delete('/users/0')

    expect(deletedResponse.body.error).toBe('User does not exist')
  })
})
