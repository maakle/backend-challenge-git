import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetAllObservedReposDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;
}
