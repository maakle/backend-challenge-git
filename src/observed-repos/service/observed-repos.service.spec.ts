import { Test, TestingModule } from '@nestjs/testing';
import { ObservedReposService } from './observed-repos.service';
import { PrismaService } from '../../prisma.service';

describe('ObservedReposService', () => {
  let module: TestingModule;
  let service: ObservedReposService;
  let prisma: PrismaService ;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [ObservedReposService, PrismaService],
    }).compile();

    service = module.get<ObservedReposService>(ObservedReposService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all observed repos', async () => {
    const repos = [{ id: 1, name: "test1" }, { id: 2, name: "test2"}];
    prisma.observedRepo.findMany = jest.fn().mockResolvedValue(repos);

    const observedRepos = await service.getAllObservedRepos({});
    expect(observedRepos).toEqual({
      results: repos,
      next: 2,
      previous: 1,
    });
  });
});
