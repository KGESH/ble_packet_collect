import { PrismaClient } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  const routerId = uuidV4();

  const newRouter = await prisma.router.upsert({
    where: { routerId },
    update: {},
    create: {
      name: 'ASUS',
      routerId,
    },
  });

  const sensorId = uuidV4();
  const newSensor = await prisma.sensor.upsert({
    where: { sensorId: uuidV4() },
    update: {},
    create: {
      name: 'NRF52832',
      sensorId,
      routerId,
    },
  });

  console.log(newRouter, newSensor);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
