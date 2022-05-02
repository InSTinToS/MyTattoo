import { TResponse } from '../global/TResponse.types'

interface ISignInRequest {
  password: string
  usernameOrEmail: string
}

interface IResponse {
  id: string
  token: string
}

type TSignInResponse = TResponse<IResponse>

export type { TSignInResponse, ISignInRequest }
