import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObservedReposModule } from './observed-repos/observed-repos.module';
import { CronService } from './cron/cron.service';

@Module({
  imports: [ObservedReposModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, CronService],
})
export class AppModule {}
