import { Injectable } from '@nestjs/common';
import { Endpoints } from '@octokit/types';
import { Octokit } from 'octokit';

export type GetGithubRepoResponse =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

@Injectable()
export class FetcherService {
  private readonly octokit = new Octokit({
    auth: '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',
  });

  async getGithubRepo(owner: string, name: string) {
    return await this.octokit.request(`GET /repos/${owner}/${name}`, {
      owner: 'OWNER',
      repo: 'REPO',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}
