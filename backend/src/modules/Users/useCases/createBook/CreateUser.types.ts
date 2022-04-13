import { UserModel } from '@modules/Users/models/UserModel'

import { RequestHandler } from 'express'

interface IRequest extends Omit<UserModel, 'id' | 'created_at'> {}

interface IResponse extends UserModel {}

type THandle = RequestHandler<void, IResponse, IRequest>

type TExecute = (data: IRequest) => Promise<IResponse>

export { THandle, IRequest, IResponse, TExecute }
