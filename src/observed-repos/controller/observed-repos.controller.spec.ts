import { Test, TestingModule } from '@nestjs/testing';
import { ObservedReposController } from './observed-repos.controller';
import { ObservedReposService } from '../service/observed-repos.service';
import { PrismaService } from '../../prisma.service';

describe('ObservedReposController', () => {
  let controller: ObservedReposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservedReposController],
      providers: [ObservedReposService, PrismaService],
    }).compile();

    controller = module.get<ObservedReposController>(ObservedReposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
