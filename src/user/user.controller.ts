import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Query, Response } from '@nestjs/common'
import { CreateUserDto, User } from 'src/@types'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public async find(@Query() params: { [key: string]: string }): Promise<User[]> {
    return this.userService.find(params)
  }

  @Get(':id')
  public async get(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this.userService.get(id)

    if (!user) {
      throw new NotFoundException()
    }

    return user
  }

  @Post()
  public async create(@Body() data: CreateUserDto, @Response() res: Response): Promise<User> {
    console.log(res);
    return this.userService.create(data)
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.delete(id)
  }
}