import { v4 as uuid } from 'uuid'

class UserModel {
  id?: string
  name: string
  author: string
  created_at?: string

  constructor() {
    this.id = this.id ?? uuid()
    this.created_at = this.created_at ?? new Date().toISOString()
  }
}

export { UserModel }
