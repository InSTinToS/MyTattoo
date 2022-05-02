import { UserModel } from '@backend/modules/Users/entities/UserModel'
import type { TResponse } from '../global/TResponse.types'

interface IDeleteUserRequestParams {
  id: UserModel['id']
}

interface IResponse {
  deletedUser: Omit<UserModel, 'password'>
}

type TDeleteUserResponse = TResponse<IResponse>

export type { IDeleteUserRequestParams, TDeleteUserResponse }
