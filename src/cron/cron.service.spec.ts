import { Test, TestingModule } from '@nestjs/testing';
import { CronService } from './cron.service';
import { Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { FetcherService } from '../fetcher/fetcher.service';
import { ObservedReposService } from '../observed-repos/service/observed-repos.service';

describe('CronService', () => {
  let service: CronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CronService,
        Logger,
        PrismaService,
        FetcherService,
        ObservedReposService,
      ],
    }).compile();

    service = module.get<CronService>(CronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
