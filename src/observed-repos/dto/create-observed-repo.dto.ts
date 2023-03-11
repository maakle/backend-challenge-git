import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class CreateObservedRepoDto {
  @ApiProperty()
  @IsUrl()
  url: string;
}
