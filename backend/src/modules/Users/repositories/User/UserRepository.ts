import { UserModel } from '../models/UserModel'
import { IUsersRepository } from './IUsersRepository.types'

import { connectToDB } from '@config/connectToDB'

class UsersRepository implements IUsersRepository {
  create: IUsersRepository['create'] = async data => {
    const database = await connectToDB()

    const query = `
    INSERT INTO Users 
      (id, created_at, name, author) 
    VALUES
      ('${data.id}', '${data.created_at}', '${data.name}', '${data.author}')
    `

    const createdUser = (await database.query<UserModel>(query)).rows[0]

    return createdUser
  }

  findAll: IUsersRepository['findAll'] = async () => {
    const database = await connectToDB()

    const query = 'SELECT * FROM Users'

    const allUsers = (await database.query<UserModel[]>(query)).rows

    return allUsers
  }
}

export { UsersRepository }
