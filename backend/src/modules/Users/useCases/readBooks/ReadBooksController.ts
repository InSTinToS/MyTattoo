import { THandle } from './ReadBooks.types'
import { ReadUsersService } from './ReadBooksService'

import { container } from 'tsyringe'

class ReadUsersController {
  handle: THandle = async (req, res) => {
    const id = req.params.id

    const readUsersService = container.resolve(ReadUsersService)

    const Users = await readUsersService.execute(id)

    res.json(Users)
  }
}

export { ReadUsersController }
