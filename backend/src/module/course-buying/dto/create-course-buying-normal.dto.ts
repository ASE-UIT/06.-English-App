import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseBuyingNormalDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Course id',
    type: String,
    example: 'd1911740-84e0-4778-9c0d-4465dcb1d13e',
  })
  courseId: string;
}
