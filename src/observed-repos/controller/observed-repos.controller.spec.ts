import { Test, TestingModule } from '@nestjs/testing';
import { ObservedReposController } from './observed-repos.controller';
import { ObservedReposService } from '../service/observed-repos.service';
import { PrismaService } from '../../prisma.service';

describe('ObservedReposController', () => {
  let controller: ObservedReposController;
  let service: ObservedReposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservedReposController],
      providers: [ObservedReposService, PrismaService],
    }).compile();

    controller = module.get<ObservedReposController>(ObservedReposController);
    service = module.get<ObservedReposService>(ObservedReposService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of observed repos', async () => {
    const repos = [{ id: 1, name: "test1" }, { id: 2, name: "test2"}];
    service.getAllObservedRepos = jest.fn().mockResolvedValue(repos);

    const result = await controller.getAllObservedRepos({});
    expect(result).toEqual(repos);
  });
});
