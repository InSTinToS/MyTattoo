import { THandle } from '../deleteUser/DeleteUser.types'
import { DeleteUserService } from './DeleteUserService'

import { AppError } from '@modules/Error/entities/AppError'

import { container } from 'tsyringe'

class DeleteUserController {
  handle: THandle = async (req, res) => {
    const id = req.params.id

    if (!id) throw new AppError('Id is required on params', 400)

    const deleteUserService = container.resolve(DeleteUserService)

    const response = await deleteUserService.execute(id)

    return res.status(200).json(response)
  }
}

export { DeleteUserController }
