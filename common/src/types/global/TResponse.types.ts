import { IThrowAppErrorResponse } from '../errors/ThrowAppError.types'

type TResponse<T> = T & Partial<IThrowAppErrorResponse>

export type { TResponse }
