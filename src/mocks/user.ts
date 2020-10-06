import * as faker from 'faker'
import { User } from '../@types'

const users: User[] = []

const LIMIT = 101

for (let index = 1; index < LIMIT; index++) {
  const date = faker.date.recent(30)
  const user: User = {
    id: index,
    username: faker.internet.userName(),
    password: faker.internet.password(),
    created_on: date,
  }

  users.push(user)
}

export default users
