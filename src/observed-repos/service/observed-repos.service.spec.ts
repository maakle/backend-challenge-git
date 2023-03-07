import { Test, TestingModule } from '@nestjs/testing';
import { ObservedReposService } from './observed-repos.service';
import { PrismaService } from '../../prisma.service';

describe('ObservedReposService', () => {
  let service: ObservedReposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObservedReposService, PrismaService],
    }).compile();

    service = module.get<ObservedReposService>(ObservedReposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
