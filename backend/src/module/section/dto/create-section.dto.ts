import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { SECTION_TYPE } from 'src/utils/constants';

export class CreateSectionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Lession Id of the section',
    type: String,
  })
  lessionId: string;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title of the section',
    type: String,
  })
  title: string;
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Content of the section',
    type: String,
  })
  content: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Type of the section',
    enum: SECTION_TYPE,
  })
  type: SECTION_TYPE;
}
