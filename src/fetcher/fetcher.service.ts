import { Injectable } from '@nestjs/common';
import { Octokit } from 'octokit';

@Injectable()
export class FetcherService {
  private readonly octokit = new Octokit({
    auth: '',
  });

  async fetchGithubRepo(owner: string, name: string) {
    return await this.octokit.request(`GET /repos/${owner}/${name}`, {
      owner: 'OWNER',
      repo: 'REPO',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}
