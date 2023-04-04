import { Injectable } from '@nestjs/common';
import { CreateRouterDto } from './dto/create-router.dto';
import { UpdateRouterDto } from './dto/update-router.dto';
import { PrismaService } from '../database/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@prisma/client';

@Injectable()
export class RouterService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRouterDto: CreateRouterDto): Promise<Router> {
    return await this.prisma.router.create({
      data: {
        routerId: uuidv4(),
        name: createRouterDto.name,
      },
    });
  }

  async findAll(): Promise<Router[]> {
    return await this.prisma.router.findMany();
  }

  async findOne(id: string): Promise<Router | null> {
    return await this.prisma.router.findUnique({
      where: {
        routerId: id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.router.update({
      where: {
        routerId: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
