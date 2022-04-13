import type { TExecute } from './SignIn.types'
import { AppError } from '@shared/errors/AppError'

import { IUsersRepository } from '@modules/Users/repositories/User/IUserRepository.types'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

@injectable()
class SignInService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute: TExecute = async ({ email, password, username }) => {
    if ((!email && !username) || !password)
      throw new AppError(
        'Needed to inform username or email, and password',
        400
      )

    const foundUser = email
      ? await this.usersRepository.findByEmail(email)
      : await this.usersRepository.findByUsername(username)

    if (!foundUser) throw new AppError('Email or password invalid', 401)

    const authorized = bcrypt.compare(password, foundUser.password)

    if (!authorized) throw new AppError('Email or password invalid', 401)

    const token = jwt.sign({}, process.env.JWT_SECRET, {
      subject: foundUser.id,
      expiresIn: '1d'
    })

    return { token }
  }
}

export { SignInService }
