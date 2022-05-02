import { UserModel } from '@backend/modules/Users/entities/UserModel'

import { RequestHandler } from 'express'

interface IRequest {}

interface IRequest {
  email: UserModel['email']
  username: UserModel['username']
  password: UserModel['password']
}

interface IResponse {
  createdUser: Omit<UserModel, 'password'>
}

interface IErrorResponse {
  error: string
}

type THandle = RequestHandler<void, IResponse | IErrorResponse, IRequest>

type TExecute = (data: IRequest) => Promise<IResponse>

export type { THandle, IRequest, IResponse, TExecute }
