import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CronService } from './cron.service';

@Module({
  controllers: [],
  providers: [CronService, PrismaService],
})
export class CronModule {}
