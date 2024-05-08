import { Injectable } from '@nestjs/common';
import { Watch } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}
  public getAll(): Promise<Watch[]> {
    return this.prismaService.watch.findMany();
  }
  public getById(id: Watch['id']): Promise<Watch | null> {
    return this.prismaService.watch.findUnique({
      where: { id },
    });
  }
  public getAllExtended(): Promise<Watch[]> {
    return this.prismaService.watch.findMany({
      include: { orders: true },
    });
  }

  public getExtendedById(id: Watch['id']): Promise<Watch | null> {
    return this.prismaService.watch.findUnique({
      where: { id },
      include: { orders: true },
    });
  }
}
