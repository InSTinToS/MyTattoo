import { TEnsureAuthentication } from './ensureAuthentication.types'

import { AppError } from '@shared/errors/AppError'

import jwt from 'jsonwebtoken'

const ensureAuthentication: TEnsureAuthentication = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET)
    res.locals.user = { id: sub }
  } catch (error) {
    throw new AppError('Invalid JWT', 401)
  }

  return next()
}

export { ensureAuthentication }
