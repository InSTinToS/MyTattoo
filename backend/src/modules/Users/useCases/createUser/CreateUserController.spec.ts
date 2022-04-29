import '@shared/containers'

import { IRequest, IResponse } from '../createUser/CreateUser.types'

import { app } from '@shared/routes'
import { AppError } from '@shared/errors/AppError'

import { connectToDB } from '@config/connectToDB'

import { Client } from 'pg'
import request from 'supertest'

let dbConnection: Client

describe('CreateUserController', () => {
  beforeAll(async () => {
    dbConnection = await connectToDB()
  })

  afterAll(async () => {
    await dbConnection.end()
  })

  it('should be able to create a user', async () => {
    const createUserData: IRequest = {
      username: 'InSTinToS',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    const response = await request(app).post('/users').send(createUserData)

    expect(response.statusCode).toBe(201)
  })

  it('should not be able to create a user if email already exists', async () => {
    const createSecondUserData: IRequest = {
      username: 'InSTinToS2',
      password: 'Miguel@1234',
      email: 'instintos@instintos.com'
    }

    expect(
      request(app).post('/users').send(createSecondUserData)
    ).rejects.toBeInstanceOf(AppError)
  })
})
