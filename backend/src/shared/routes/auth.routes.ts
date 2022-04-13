import { SignInController } from '@modules/Authentication/useCases/signIn/SignInController'

import { Router } from 'express'

const AuthRoutes = Router()

const signInController = new SignInController()

AuthRoutes.post('/sign-in', signInController.handle)

export { AuthRoutes }
