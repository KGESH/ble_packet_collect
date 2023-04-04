import { Module } from '@nestjs/common';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';
import { PrismaModule } from '../database/prisma/prisma.module';
import { RouterMqttController } from './router.mqtt.controller';

@Module({
  imports: [PrismaModule],
  controllers: [RouterController, RouterMqttController],
  providers: [RouterService],
  exports: [RouterService],
})
export class RouterModule {}
