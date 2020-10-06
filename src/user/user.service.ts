import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/@types'
import { User } from './user.entity';
import { DEFAULT_VALUES } from '../config/constants'

@Injectable()

export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}

  public async find(params: { [key: string]: string | string[] | number | number[] }): Promise<any> {
    const { limit = DEFAULT_VALUES.DB_DEFAULT_LIMIT, offset = DEFAULT_VALUES.DB_OFFSET, ...where } = params

    let currentLimit = +limit

    if (currentLimit > DEFAULT_VALUES.DB_MAX_LIMIT) {
      currentLimit = DEFAULT_VALUES.DB_MAX_LIMIT
    }

    return this.userRepository.findAndCountAll({
      where,
      limit: currentLimit,
      offset: +offset,
      distinct: true,
    })
  }

  public async get(id: number): Promise<User> {
    return this.userRepository.findByPk(id)
  }

  public async findOne(params: { [key: string]: string | string[] | number | number[] }): Promise<User> {
    return this.userRepository.findOne({ where: { ...params } })
  }

  public async create(data: CreateUserDto): Promise<User> {
    return this.userRepository.create(data)
  }

  public async delete(id: number): Promise<User> {
    const user = await this.get(id)

    await user.destroy()
    return user
  }
}

// export class UserService {
//   constructor(
//     @Inject('USER_REPOSITORY') private userRepository: typeof User) {}

//   async findAll(): Promise<User[]> {
//     return this.userRepository.findAll<User>();
//   }


//   async find(params: { [key: string]: string }): Promise<User[]> {
//     console.log(params);
//     return this.userRepository.findAll<User>();
//   }
// }