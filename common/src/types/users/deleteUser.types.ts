import type { TResponse } from '../global/TResponse.types'
import { IUserModel } from './userModel.types'

interface IDeleteUserRequestParams {
  id: IUserModel['id']
}

interface IResponse {
  deletedUser: Omit<IUserModel, 'password'>
}

type TDeleteUserResponse = TResponse<IResponse>

export type { IDeleteUserRequestParams, TDeleteUserResponse }
