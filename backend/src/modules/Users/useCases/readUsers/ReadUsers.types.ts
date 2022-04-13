import { UserModel } from '@modules/Users/models/UserModel'

import { RequestHandler } from 'express'

interface ILocals {
  user: {
    id: UserModel['id']
  }
}

interface IParams {
  id?: string
}

type TResponse = UserModel[] | UserModel

type TExecute = (id?: IParams['id']) => Promise<TResponse>

type THandle = RequestHandler<IParams, TResponse, void, void, ILocals>

export { TExecute, THandle }
