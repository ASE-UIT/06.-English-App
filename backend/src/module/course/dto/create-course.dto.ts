import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { STATE } from 'src/utils/constants';

export class CreateCourseDto {
  @AutoMap()
  @ApiProperty({
    description: 'Description of the course',
    type: String,
    example: 'This is a course about how to create a course',
  })
  @IsString()
  description: string;

  @AutoMap()
  @ApiProperty({
    description: 'Title of the course',
    type: String,
    example: 'Toeic Listening Compact Online 450+',
  })
  @IsString()
  title: string;

  @AutoMap()
  @ApiProperty({
    description: 'State of the course',
    enum: STATE,
    example: STATE.DRAFT,
  })
  @IsEnum(STATE)
  state: STATE = STATE.DRAFT;

  @AutoMap()
  @ApiProperty({
    description: 'Thumbnail of the course',
    type: String,
    example: 'https://example.com/thumbnail.jpg',
  })
  @IsOptional()
  @IsString()
  thumbnail_image: string;

  @AutoMap()
  @ApiProperty({
    description: 'Category id of the course',
    type: String,
    example: '41fdc3d9-2b25-4fd8-adae-0c4c9ac91ee8',
  })
  @IsString()
  categoryId: string;

  @AutoMap()
  @ApiProperty({
    description: 'Price of the course',
    type: Number,
    example: 10.99,
  })
  @IsNumber()
  price: number;
}
