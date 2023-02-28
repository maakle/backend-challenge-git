import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class GetAllObservedReposDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  skip?: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  take?: number;

  @ApiProperty()
  @IsOptional()
  cursor?: Prisma.ObservedRepoWhereUniqueInput;

  @ApiProperty()
  @IsOptional()
  where?: Prisma.ObservedRepoWhereInput;
}
