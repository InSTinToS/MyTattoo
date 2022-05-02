import { IResponse as ICreateUserResponse } from '../createUser/CreateUser.types'
import { IResponse as IReadUsersResponse } from '../readUsers/ReadUsers.types'

import { app } from '@shared/routes'
import { ISuperResponse } from '@shared/types/supertest'

import { connectToDB } from '@config/connectToDB'

import { Client } from 'pg'
import request from 'supertest'

let dbConnection: Client

describe('ReadUserController', () => {
  beforeAll(async () => {
    dbConnection = await connectToDB()
  })

  afterAll(async () => {
    await dbConnection.end()
  })

  it('should be able to read a user using id', async () => {
    const createdUserResponse: ISuperResponse<ICreateUserResponse> =
      await request(app).post('/users').send({
        username: 'InSTinToS',
        password: 'Miguel@1234',
        email: 'instintos@instintos.com'
      })

    const createdUser = createdUserResponse.body.createdUser

    const readUserResponse: ISuperResponse<IReadUsersResponse> = await request(
      app
    ).get(`/users/${createdUser.id}`)

    expect(createdUser).toStrictEqual(readUserResponse.body.user)

    await request(app).delete(`/users/${createdUser.id}`)
  })

  it('should be able to read all users', async () => {
    const createdUserResponse: ISuperResponse<ICreateUserResponse> =
      await request(app).post('/users').send({
        username: 'InSTinToS',
        password: 'Miguel@1234',
        email: 'instintos@instintos.com'
      })

    const createdSecondUserResponse: ISuperResponse<ICreateUserResponse> =
      await request(app).post('/users').send({
        username: 'InSTinToS2',
        password: 'Miguel@1234',
        email: 'instintos2@instintos.com'
      })

    const createdUser = createdUserResponse.body.createdUser
    const createdSecondUser = createdSecondUserResponse.body.createdUser

    const readUserResponse: ISuperResponse<IReadUsersResponse> = await request(
      app
    ).get('/users')

    expect([createdUser, createdSecondUser]).toStrictEqual(
      readUserResponse.body.users
    )

    await request(app).delete(`/users/${createdUser.id}`)
    await request(app).delete(`/users/${createdSecondUser.id}`)
  })
})
