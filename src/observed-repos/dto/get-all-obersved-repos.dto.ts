import { ApiProperty } from '@nestjs/swagger';;
import { IsOptional, IsString } from 'class-validator';
import { ObservedRepo } from '@prisma/client';

export class GetAllObservedReposDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsOptional()
  after?: string;

  @ApiProperty()
  @IsOptional()
  before?: string;

  @ApiProperty()
  @IsOptional()
  search?: string;
}


export class GetAllObservedReposResponse {
  @ApiProperty()
  @IsOptional()
  next?: string;

  @ApiProperty()
  @IsOptional()
  previous?: string;

  @ApiProperty()
  @IsOptional()
  results?: ObservedRepo[];
}
