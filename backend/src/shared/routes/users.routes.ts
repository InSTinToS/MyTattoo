import { ensureAuthentication } from '@shared/middlewares/ensureAuthentication'

import { CreateUserController } from '@modules/Users/useCases/createUser/CreateUserController'
import { ReadUsersController } from '@modules/Users/useCases/readUsers/ReadUsersController'

import { Router } from 'express'

const UsersRoutes = Router()

const readUsersController = new ReadUsersController()
const createUserController = new CreateUserController()

UsersRoutes.get('/:id', ensureAuthentication, readUsersController.handle)
UsersRoutes.post('/', createUserController.handle)

export { UsersRoutes }
