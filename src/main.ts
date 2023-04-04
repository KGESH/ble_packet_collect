import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './database/prisma/prisma.service';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mqttListener = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://localhost:1883',
    },
  });

  /** 서버 종료시 Prisma 종료 Hook */
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
