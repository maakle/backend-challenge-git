import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class GetAllObservedReposDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  skip?: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  take?: number;

  @ApiProperty()
  @IsOptional()
  cursor?: Prisma.ObservedRepoWhereUniqueInput;

  @ApiProperty()
  @IsOptional()
  where?: Prisma.ObservedRepoWhereInput;
}
