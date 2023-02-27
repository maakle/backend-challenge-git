import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObservedRepo } from '@prisma/client';
import { ObservedReposService } from '../service/observed-repos.service';

@Controller('api/v1/observed-repos')
export class ObservedReposController {
  constructor(private readonly observedRepoService: ObservedReposService) {}

  @Get()
  async getAllObservedRepos(): Promise<ObservedRepo[]> {
    return this.observedRepoService.getAllObservedRepos();
  }

  @Post()
  async createObservedRepo(@Body() body: ObservedRepo): Promise<ObservedRepo> {
    return this.observedRepoService.createObservedRepo(body);
  }

  @Get(':id')
  async getObservedRepo(@Param('id') id: string): Promise<ObservedRepo | null> {
    return this.observedRepoService.getObservedRepo(id);
  }

  @Put(':id')
  async updateObservedRepo(
    @Param('id') id: string,
    @Body() body: ObservedRepo,
  ): Promise<ObservedRepo> {
    return this.observedRepoService.updateObservedRepo(id, body);
  }

  @Delete(':id')
  async deleteObservedRepo(@Param('id') id: string): Promise<ObservedRepo> {
    return this.observedRepoService.deleteObservedRepo(id);
  }
}
