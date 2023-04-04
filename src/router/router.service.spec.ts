import { Test, TestingModule } from '@nestjs/testing';
import { RouterService } from './router.service';
import { PrismaService } from '../database/prisma/prisma.service';

describe('RouterService', () => {
  let service: RouterService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RouterService, PrismaService],
    }).compile();

    service = module.get<RouterService>(RouterService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  //remove data after test
  afterEach(async () => {
    await prisma.sensor.deleteMany();
    await prisma.router.deleteMany();
  });

  //create router test
  it('should be able to create a router', async () => {
    const router = await service.create({
      name: 'test',
    });

    expect(router.name).toEqual('test');

    const found = await service.findOne(router.routerId);
    expect(found.name).toEqual('test');
  });

  //soft delete test
  it('should be able to soft delete a router', async () => {
    const router = await service.create({
      name: 'test',
    });

    const deleted = await service.remove(router.routerId);
    expect(deleted.deletedAt).not.toBeNull();

    /** Todo: impl soft delete check middleware */
    // const found = await service.findOne(router.routerId);
    // expect(found).toBeNull();
  });
});
