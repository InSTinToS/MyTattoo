import { UserModel } from '@backend/modules/Users/entities/UserModel'
import { TResponse } from '../global/TResponse.types'

interface ICreateUserRequest {
  email: UserModel['email']
  username: UserModel['username']
  password: UserModel['password']
}

interface IResponse {
  createdUser: Omit<UserModel, 'password'>
}

type TCreateUserResponse = TResponse<IResponse>

export type { TCreateUserResponse, ICreateUserRequest }
