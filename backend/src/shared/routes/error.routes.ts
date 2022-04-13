import { AppError } from '@shared/errors/AppError'

import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) =>
  error instanceof AppError
    ? res.status(error.statusCode).json({ message: error.message })
    : res.status(500).json({ message: 'Internal server error - ' + error })

export { errorHandler }
