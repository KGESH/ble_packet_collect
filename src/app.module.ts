import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma/prisma.module';
import { RouterModule } from './router/router.module';
import { SensorModule } from './sensor/sensor.module';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [ConfigsModule, PrismaModule, RouterModule, SensorModule],
  controllers: [AppController],
})
export class AppModule {}
