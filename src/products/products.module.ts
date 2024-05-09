import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/shared/services/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [PrismaModule],
})
export class ProductsModule {}
