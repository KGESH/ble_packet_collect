import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { PrismaService } from '../database/prisma/prisma.service';
import { v4 as uuidV4 } from 'uuid';
import { Sensor } from '@prisma/client';

@Injectable()
export class SensorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSensorDto: CreateSensorDto): Promise<Sensor> {
    const sensorId = uuidV4();
    return await this.prisma.sensor.create({
      data: {
        sensorId,
        name: createSensorDto.name,
        routerId: createSensorDto.routerId,
      },
    });
  }

  async findAll(): Promise<Sensor[]> {
    return this.prisma.sensor.findMany();
  }

  async findOne(id: string): Promise<Sensor | null> {
    return await this.prisma.sensor.findUnique({
      where: {
        sensorId: id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.sensor.update({
      where: {
        sensorId: id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
