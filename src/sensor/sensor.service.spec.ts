import { Test, TestingModule } from '@nestjs/testing';
import { SensorService } from './sensor.service';
import { PrismaService } from '../database/prisma/prisma.service';
import { v4 as uuidV4 } from 'uuid';

describe('SensorService', () => {
  let service: SensorService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorService, PrismaService],
    }).compile();

    service = module.get<SensorService>(SensorService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  //remove data after test
  afterEach(async () => {
    await prisma.sensor.deleteMany();
    await prisma.router.deleteMany();
  });

  //create sensor test
  it('should be able to create a sensor', async () => {
    const routerId = uuidV4();
    const router = await prisma.router.create({
      data: {
        routerId,
        name: 'test',
      },
    });

    const sensor = await service.create({
      name: 'test',
      routerId: router.routerId,
    });

    expect(sensor.name).toEqual('test');
    expect(sensor.routerId).toEqual(routerId);

    const found = await service.findOne(sensor.sensorId);
    expect(found.name).toEqual('test');
    expect(found.routerId).toEqual(routerId);
  });
});
