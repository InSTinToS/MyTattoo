import { UserModel } from '@backend/modules/Users/entities/UserModel'
import { TResponse } from '../global/TResponse.types'

interface IReadUsersRequestParams {
  id?: UserModel['id']
}

interface IResponse {
  user?: Omit<UserModel, 'password'>
  users?: Omit<UserModel, 'password'>[]
}

type TReadUsersResponse = TResponse<IResponse>

export type { TReadUsersResponse, IReadUsersRequestParams }
