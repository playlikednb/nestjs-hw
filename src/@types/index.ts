export type User = {
  id: number
  username: string
  password: string
  created_on: Date
}

export interface CreateUserDto {
  username: string
  password: string
}
