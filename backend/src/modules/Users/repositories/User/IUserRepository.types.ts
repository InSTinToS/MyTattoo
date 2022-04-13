import { UserModel } from '../../models/UserModel'

type TCreate = (data: UserModel) => Promise<UserModel>

type TFindById = (id: UserModel['id']) => Promise<UserModel>

type TFindAll = () => Promise<UserModel[] | any[]>

type TFindByUsername = (
  username: UserModel['username']
) => Promise<UserModel | undefined>

type TFindByEmail = (
  email: UserModel['email']
) => Promise<UserModel | undefined>

interface IUsersRepository {
  create: TCreate
  findAll: TFindAll
  findById: TFindById
  findByEmail: TFindByEmail
  findByUsername: TFindByUsername
}

export type { IUsersRepository }
