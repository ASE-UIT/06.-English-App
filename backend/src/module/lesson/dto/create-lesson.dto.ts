import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TYPES } from 'src/utils/constants';

export class CreateLessonDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'name of lesson',
  })
  name: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'description of lesson',
  })
  description: string;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'content of lesson',
  })
  content: string;

  @AutoMap()
  @IsEnum(TYPES)
  @IsNotEmpty()
  @ApiProperty({
    enum: TYPES,
    description: 'type of lesson',
  })
  type: TYPES;
}
