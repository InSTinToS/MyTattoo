import { UserModel } from '@modules/Users/models/UserModel'

import { RequestHandler } from 'express'

interface IRequest {
  email: UserModel['email']
  username: UserModel['username']
  password: UserModel['password']
}

interface IResponse extends UserModel {}

type THandle = RequestHandler<void, IResponse, IRequest>

type TExecute = (data: IRequest) => Promise<IResponse>

export type { THandle, IRequest, IResponse, TExecute }
