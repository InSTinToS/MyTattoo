interface IUserModel {
  id: string
  bio?: string
  email: string
  avatar?: string
  password: string
  username: string
  created_at: string
  updated_at: string
  full_name?: string
  short_bio?: string
}

export type { IUserModel }
