import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { DatabaseModule } from '../database/database.module'
import { userProviders } from './user.providers'
import { UserController } from './user.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})

export class UserModule {}
