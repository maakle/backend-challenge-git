import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma.service';
import { FetcherService } from '../fetcher/fetcher.service';
import { ObservedReposService } from '../observed-repos/service/observed-repos.service';

@Injectable()
export class CronService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(CronService.name);
  private readonly fetchService = new FetcherService();
  private readonly observedRepoService = new ObservedReposService(this.prisma);

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    this.logger.debug('Start fetching all observed repos');
    this.observeRepos();
  }

  async observeRepos() {
    // Step 1: Get all observed Repos
    const allObservedRepos =
      await this.observedRepoService.getAllObservedRepos();

    // Step 2: Iterate over those & fetch details
    allObservedRepos.map(async (repo) => {
      const repoDetails = await this.fetchService.fetchGithubRepo(
        repo.owner,
        repo.name,
      );

      console.log(repoDetails);

      // Step 3: Map to local format

      // Step 4: Update local repo
    });
  }
}
