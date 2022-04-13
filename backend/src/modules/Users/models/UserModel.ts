import { v4 as uuid } from 'uuid'

class UserModel {
  id: string
  email: string
  username: string
  password: string
  created_at: string
  updated_at: string
  bio?: string
  avatar?: string
  full_name?: string
  short_bio?: string

  constructor() {
    this.id = this.id ?? uuid()
    this.created_at = this.created_at ?? new Date().toISOString()
    this.updated_at = this.updated_at ?? new Date().toISOString()
  }
}

export { UserModel }
