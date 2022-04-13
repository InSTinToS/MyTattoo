import { RequestHandler } from 'express'

interface IRequest {
  email?: string
  password: string
  username?: string
}

interface IResponse {
  token: string
}

type THandle = RequestHandler<void, IResponse, IRequest>

type TExecute = (data: IRequest) => Promise<IResponse>

export type { THandle, IRequest, IResponse, TExecute }
