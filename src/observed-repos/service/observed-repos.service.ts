import { Injectable } from '@nestjs/common';
import { ObservedRepo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreateObservedRepoDto } from '../dto/create-observed-repo.dto';
import {
  GetAllObservedReposDto,
  GetAllObservedReposResponse,
} from '../dto/get-all-obersved-repos.dto';
import { UpdateObservedRepoDto } from '../dto/update-observed-repo.dto';

const PAGE_SIZE = 10;
const SKIP = 1; // won't take provided cursor

@Injectable()
export class ObservedReposService {
  constructor(private prisma: PrismaService) {}

  async getAllObservedRepos(
    query: GetAllObservedReposDto,
  ): Promise<GetAllObservedReposResponse> {
    const { status, after, before, search } = query;

    const take = after ? PAGE_SIZE : before ? -PAGE_SIZE : PAGE_SIZE;
    const cursor = after ? { id: after } : before ? { id: before } : undefined;
    const skip = after || before ? SKIP : 0;

    const results = await this.prisma.observedRepo.findMany({
      skip,
      take,
      cursor,
      where: {
        name: {
          contains: search,
        },
        status: status,
      },
    });

    const firstResult = results[0];
    const lastResult = results[results.length - 1];

    return {
      previous: firstResult ? firstResult.id : null,
      next: lastResult ? lastResult.id : null,
      results: results,
    };
  }

  async getObservedRepo(id: string): Promise<ObservedRepo | null> {
    return this.prisma.observedRepo.findUnique({ where: { id } });
  }

  async createObservedRepo(body: CreateObservedRepoDto): Promise<ObservedRepo> {
    const urlSegments = body.url.split('/');
    const owner = urlSegments[3];
    const name = urlSegments[4];

    return this.prisma.observedRepo.create({
      data: { url: body.url, owner, name },
    });
  }

  async updateObservedRepo(
    id: string,
    body: UpdateObservedRepoDto,
  ): Promise<ObservedRepo> {
    return this.prisma.observedRepo.update({
      where: { id },
      data: { ...body },
    });
  }

  async deleteObservedRepo(id: string): Promise<ObservedRepo> {
    return this.prisma.observedRepo.delete({
      where: { id },
    });
  }
}
