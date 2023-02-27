import { Injectable } from '@nestjs/common';
import { ObservedRepo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ObservedReposService {
  constructor(private prisma: PrismaService) {}

  async getAllObservedRepos(): Promise<ObservedRepo[]> {
    return this.prisma.observedRepo.findMany();
  }

  async getObservedRepo(id: string): Promise<ObservedRepo | null> {
    return this.prisma.observedRepo.findUnique({ where: { id } });
  }

  async createObservedRepo(data: ObservedRepo): Promise<ObservedRepo> {
    return this.prisma.observedRepo.create({
      data,
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
