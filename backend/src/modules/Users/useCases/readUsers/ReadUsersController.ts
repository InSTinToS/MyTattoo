import { THandle } from './ReadUsers.types'
import { ReadUsersService } from './ReadUsersService'

import { container } from 'tsyringe'

class ReadUsersController {
  handle: THandle = async (req, res) => {
    const id = req.params.id

    const readUsersService = container.resolve(ReadUsersService)

    console.log(res.locals.user.id)

    const Users = await readUsersService.execute(id)

    res.json(Users)
  }
}

export { ReadUsersController }
