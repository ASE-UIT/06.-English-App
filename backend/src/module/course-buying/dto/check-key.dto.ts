import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CheckKeyDto {
  @ApiProperty({
    description: 'Key to check',
    example: 'key12345',
  })
  @IsNotEmpty()
  @IsString()
  key: string;
  @ApiProperty({
    description: 'courseId',
    example: '449dd3c4-1eee-4ee7-a4d3-18fa1c8d64fb',
  })
  @IsNotEmpty()
  @IsString()
  courseId: string;
}
