import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getAllTodo(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async getTodo(id: string): Promise<Todo | null> {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async createTodo(data: Todo): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async updateTodo(id: string): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data: { completed: true },
    });
  }

  async deleteTodo(id: string): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
