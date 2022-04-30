import { UserModel } from '@modules/Users/entities/UserModel'

import { RequestHandler } from 'express'

interface IRequest {
  id: UserModel['id']
}

interface IResponse {
  deletedUser: Omit<UserModel, 'password'>
}

type THandle = RequestHandler<IRequest, IResponse, void>

type TExecute = (id: string) => Promise<IResponse>

export { TExecute, THandle, IResponse, IRequest }
