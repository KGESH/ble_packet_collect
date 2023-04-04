import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './database/prisma/prisma.module';
import { RouterModule } from './router/router.module';

@Module({
  imports: [PrismaModule, RouterModule],
  controllers: [AppController],
})
export class AppModule {}
