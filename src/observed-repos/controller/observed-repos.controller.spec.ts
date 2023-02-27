import { Test, TestingModule } from '@nestjs/testing';
import { ObservedReposController } from './observed-repos.controller';

describe('ObservedReposController', () => {
  let controller: ObservedReposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservedReposController],
    }).compile();

    controller = module.get<ObservedReposController>(ObservedReposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
