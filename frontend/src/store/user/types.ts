import type { UserModel } from '@backend/modules/Users/models/UserModel'

interface IUserStore {
  user?: Partial<UserModel>
}

export type { IUserStore }
