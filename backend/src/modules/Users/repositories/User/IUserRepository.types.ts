import { UserModel } from '../../models/UserModel'

type TCreate = (data: UserModel) => Promise<UserModel>

type TFindAll = () => Promise<UserModel[] | any[]>

interface IUsersRepository {
  create: TCreate
  findAll: TFindAll
}

export { IUsersRepository }
