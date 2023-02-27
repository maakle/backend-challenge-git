import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronModule } from './cron/cron.module';
import { FetcherService } from './fetcher/fetcher.service';
import { ObservedReposModule } from './observed-repos/observed-repos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ObservedReposModule,
    ScheduleModule.forRoot(),
    CronModule,
  ],
  controllers: [AppController],
  providers: [AppService, FetcherService],
})
export class AppModule {}
