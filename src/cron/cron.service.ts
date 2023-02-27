import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FetcherService } from '../fetcher/fetcher.service';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  private readonly fetchService = new FetcherService();

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    this.logger.debug('Start fetching all observed repos');
    this.observeRepos();
  }

  async observeRepos() {
    // Step 1: Get all observed Repos

    // Step 2: Iterate over those & fetch details
    const githubRepo = await this.fetchService.getGithubRepo('nestjs', 'nest');
    console.log(githubRepo);

    // Step 3: map to local format
  }
}
