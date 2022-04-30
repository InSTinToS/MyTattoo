import { AppError } from '@modules/Error/entities/AppError'

import { ErrorRequestHandler } from 'express'

interface IThrowAppErrorResponse {
  error: string
}

type THandle = ErrorRequestHandler<any, IThrowAppErrorResponse>

type TExecute = (error: Error | AppError) => {
  statusCode: number
  error: IThrowAppErrorResponse['error']
}

export { THandle, IThrowAppErrorResponse, TExecute }
