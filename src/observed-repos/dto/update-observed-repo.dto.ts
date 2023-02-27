import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateObservedRepoDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  stars?: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  openIssues?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  license?: string;
}
