import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PrismaService } from './shared/services/prisma.service';
import * as cors from 'cors';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ProductsModule,
    UserModule,
    AuthModule,
    PrismaModule,
    OrdersModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(cors({ credentials: true, origin: 'http://localhost:3000' }))
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
