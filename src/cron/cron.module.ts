import { Logger, Module } from '@nestjs/common';
import { ObservedReposService } from 'src/observed-repos/service/observed-repos.service';
import { PrismaService } from 'src/prisma.service';
import { FetcherService } from '../fetcher/fetcher.service';
import { CronService } from './cron.service';

@Module({
  controllers: [],
  providers: [
    CronService,
    PrismaService,
    Logger,
    FetcherService,
    ObservedReposService,
  ],
})
export class CronModule {}
