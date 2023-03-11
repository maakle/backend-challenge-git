import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ObservedReposController } from './controller/observed-repos.controller';
import { ObservedReposService } from './service/observed-repos.service';

@Module({
  controllers: [ObservedReposController],
  providers: [ObservedReposService, PrismaService],
})
export class ObservedReposModule {}
