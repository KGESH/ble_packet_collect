import { Module } from '@nestjs/common';
import { RouterService } from './router.service';
import { RouterController } from './router.controller';
import { PrismaModule } from '../database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RouterController],
  providers: [RouterService],
  exports: [RouterService],
})
export class RouterModule {}
