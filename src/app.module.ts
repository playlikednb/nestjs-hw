import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './middlewares/logger.middleware'
import { UserMiddleware } from './middlewares/user.middleware'
import { UserModule } from './user/user.module'

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
    consumer.apply(UserMiddleware).forRoutes({ path: '/users', method: RequestMethod.POST })
  }
}