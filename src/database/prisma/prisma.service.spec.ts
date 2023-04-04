import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  //remove data after test
  afterEach(async () => {
    await service.router.deleteMany();
    await service.sensor.deleteMany();
  });

  it('should be able to create a router', async () => {
    const uuid = 'f5e5b5d5-5b5d-5b5d-5b5d-5b5d5b5d5b5d';
    const router = await service.router.create({
      data: {
        routerId: uuid,
        name: 'test',
      },
    });
    expect(router.routerId).toEqual(uuid);

    const router2 = await service.router.findUnique({
      where: {
        routerId: uuid,
      },
    });

    expect(router2).toEqual(router);
  });

  it('should be able to create a sensor', async () => {
    const uuid = 'f5e5b5d5-5b5d-5b5d-5b5d-5b5d5b5d5b5d';
    const sensor = await service.sensor.create({
      data: {
        sensorId: uuid,
        name: 'test',
        routerId: 'f5e5b5d5-5b5d-5b5d-5b5d-5b5d5b5d5b5d',
      },
    });
    expect(sensor.sensorId).toEqual(uuid);

    const sensor2 = await service.sensor.findFirst({
      where: {
        sensorId: uuid,
      },
    });

    expect(sensor2).toEqual(sensor);
  });
});
