import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetHistoryResultDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'Section id',
  })
  sectionId: string;
}
