import { UserModel } from '@modules/Users/entities/UserModel'

import { RequestHandler } from 'express'

interface IParams {
  id?: UserModel['id']
}

interface IResponse {
  user?: UserModel
  users?: UserModel[]
}

type TExecute = (id?: IParams['id']) => Promise<IResponse>

type THandle = RequestHandler<IParams, IResponse>

export type { TExecute, THandle, IResponse }
