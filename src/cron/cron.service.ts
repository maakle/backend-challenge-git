import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  FetcherService,
  GetGithubRepoResponse,
} from '../fetcher/fetcher.service';
import { ObservedReposService } from '../observed-repos/service/observed-repos.service';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CronService {
  constructor(
    private readonly logger: Logger,
    private readonly prisma: PrismaService,
    private readonly fetchService: FetcherService,
    private readonly observedRepoService: ObservedReposService,
  ) {
    observedRepoService = new ObservedReposService(this.prisma);
    logger = new Logger(CronService.name);
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    this.observeRepos();
  }

  async observeRepos(nextCursor?: string) {
    // Step 1: Get all observed repos from db
    const { results, next } =
      await this.observedRepoService.getAllObservedRepos({
        status: 'ACTIVE',
        after: nextCursor,
      });
    this.logger.debug(`Fetched ${results.length} repos`);

    // Step 2: Iterate over all repos & fetch details for each
    await Promise.all(
      results.map(async (repo) => {
        const repoDetails = await this.fetchService.getGithubRepo(
          repo.owner,
          repo.name,
        );
        const data: GetGithubRepoResponse = repoDetails.data;

        // Step 3: Map to local format
        const mappedData = {
          stars: data.stargazers_count,
          openIssues: data.open_issues_count,
          license: data.license?.key ?? '',
        };

        // Step 4: Update db with new info
        await this.observedRepoService.updateObservedRepo(repo.id, mappedData);
        this.logger.debug(`Updated ${repo.id}`);
      }),
    );

    if (next) {
      await this.observeRepos(next);
    }
  }
}
