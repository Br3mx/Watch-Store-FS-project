import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController, PrismaService],
})
export class ProductsModule {}
