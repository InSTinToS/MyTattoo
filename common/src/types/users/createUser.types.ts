import type { TResponse } from '../global/TResponse.types'
import { IUserModel } from './userModel.types'

interface ICreateUserRequest {
  email: IUserModel['email']
  username: IUserModel['username']
  password: IUserModel['password']
}

interface IResponse {
  createdUser: Omit<IUserModel, 'password'>
}

type TCreateUserResponse = TResponse<IResponse>

export type { TCreateUserResponse, ICreateUserRequest }
