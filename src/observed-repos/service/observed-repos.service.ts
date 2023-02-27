import { Injectable } from '@nestjs/common';
import { ObservedRepo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { CreateObservedRepoDto } from '../dto/create-observed-repo.dto';

@Injectable()
export class ObservedReposService {
  constructor(private prisma: PrismaService) {}

  async getAllObservedRepos(): Promise<ObservedRepo[]> {
    return this.prisma.observedRepo.findMany();
  }

  async getObservedRepo(id: string): Promise<ObservedRepo | null> {
    return this.prisma.observedRepo.findUnique({ where: { id } });
  }

  async createObservedRepo(body: CreateObservedRepoDto): Promise<ObservedRepo> {
    const urlSegments = body.url.split('/');
    const owner = urlSegments[1];
    const name = urlSegments[2];

    return this.prisma.observedRepo.create({
      data: { url: body.url, owner, name },
    });
  }

  async updateObservedRepo(
    id: string,
    data: ObservedRepo,
  ): Promise<ObservedRepo> {
    return this.prisma.observedRepo.update({
      where: { id },
      data: { ...data },
    });
  }

  async deleteObservedRepo(id: string): Promise<ObservedRepo> {
    return this.prisma.observedRepo.delete({
      where: { id },
    });
  }
}
