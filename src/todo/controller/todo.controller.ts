import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoService } from '../service/todo.service';

@Controller('api/v1/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo(): Promise<Todo[]> {
    return this.todoService.getAllTodo();
  }

  @Post()
  async createTodo(@Body() postData: Todo): Promise<Todo> {
    return this.todoService.createTodo(postData);
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.getTodo(id);
  }

  @Put(':id')
  async Update(@Param('id') id: string): Promise<Todo> {
    return this.todoService.updateTodo(id);
  }

  @Delete(':id')
  async Delete(@Param('id') id: string): Promise<Todo> {
    return this.todoService.deleteTodo(id);
  }
}
