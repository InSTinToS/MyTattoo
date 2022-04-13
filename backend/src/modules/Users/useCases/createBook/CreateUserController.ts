import { THandle } from './CreateUser.types'
import { CreateUserService } from './CreateUserService'

import { container } from 'tsyringe'

class CreateUserController {
  handle: THandle = async (req, res) => {
    const createUserService = container.resolve(CreateUserService)

    const dataToCreate = req.body

    const createdUser = await createUserService.execute(dataToCreate)

    return res.status(201).json(createdUser)
  }
}

export { CreateUserController }
