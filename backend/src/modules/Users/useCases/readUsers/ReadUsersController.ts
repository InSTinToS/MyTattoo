import type { THandle } from './ReadUsers.types'
import { ReadUsersService } from './ReadUsersService'

import { container } from 'tsyringe'

class ReadUsersController {
  handle: THandle = async (req, res) => {
    const id = req.params.id

    const readUsersService = container.resolve(ReadUsersService)

    const response = await readUsersService.execute(id)

    res.json(response)
  }
}

export { ReadUsersController }
