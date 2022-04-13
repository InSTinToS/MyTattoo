import { CreateUserController } from '@modules/Users/useCases/createBook/CreateUserController'
import { ReadUsersController } from '@modules/Users/useCases/readBooks/ReadBooksController'

import { Router } from 'express'

const UsersRoutes = Router()

const readUsersController = new ReadUsersController()
const createUserController = new CreateUserController()

UsersRoutes.get('/', readUsersController.handle)
UsersRoutes.post('/', createUserController.handle)

export { UsersRoutes }
