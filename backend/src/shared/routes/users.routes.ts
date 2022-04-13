import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication/ensureAuthentication'

import { CreateUserController } from '@modules/Users/useCases/createUser/CreateUserController'
import { ReadUsersController } from '@modules/Users/useCases/readUsers/ReadUsersController'

import { Router } from 'express'

const UsersRoutes = Router()

const readUsersController = new ReadUsersController()
const createUserController = new CreateUserController()

UsersRoutes.get('/', ensureAuthentication, readUsersController.handle)
UsersRoutes.post('/', createUserController.handle)

export { UsersRoutes }
