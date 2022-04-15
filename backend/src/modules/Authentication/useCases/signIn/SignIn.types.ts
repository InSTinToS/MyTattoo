import { RequestHandler } from 'express'

interface IRequest {
  password: string
  usernameOrEmail: string
}

interface IResponse {
  id: string
  token: string
}

type THandle = RequestHandler<void, IResponse, IRequest>

type TExecute = (data: IRequest) => Promise<IResponse>

export type { THandle, IRequest, IResponse, TExecute }
