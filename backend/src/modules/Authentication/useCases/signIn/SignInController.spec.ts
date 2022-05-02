import { app } from '@shared/routes'
import { ISuperResponse } from '@shared/types/supertest'

import { connectToDB } from '@config/connectToDB'

import { Client } from 'pg'
import request from 'supertest'
import { IResponse as ISignInResponse } from './SignIn.types'

import type { IResponse as ICreateUserResponse } from '../../../Users/useCases/createUser/CreateUser.types'

let dbConnection: Client
describe('SignInController', () => {
  beforeAll(async () => {
    dbConnection = await connectToDB()
  })

  afterAll(async () => {
    await dbConnection.end()
  })

  it('should be able to be authenticated', async () => {
    const createUserData = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    const createUserResponse: ISuperResponse<ICreateUserResponse> =
      await request(app).post('/users').send(createUserData)

    const signInResponse: ISuperResponse<ISignInResponse> = await request(app)
      .post('/auth/sign-in')
      .send({
        usernameOrEmail: createUserData.username,
        password: createUserData.password
      })

    expect(signInResponse.body).toHaveProperty('token')
    expect(signInResponse.body.id).toBe(createUserResponse.body.createdUser.id)

    await request(app).delete(
      `/users/${createUserResponse.body.createdUser.id}`
    )
  })
})
