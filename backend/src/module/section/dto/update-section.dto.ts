import { AutoMap } from '@automapper/classes';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SECTION_TYPE } from 'src/utils/constants';

export class UpdateSectionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id of the section',
    type: String,
  })
  id: string;
  @AutoMap()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Lession Id of the section',
    type: String,
  })
  lessionId?: string;
  @AutoMap()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Title of the section',
    type: String,
  })
  title?: string;
  @AutoMap()
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Content of the section',
    type: String,
  })
  content?: string;
  @ApiProperty()
  @IsEnum(SECTION_TYPE)
  @IsOptional()
  @AutoMap()
  @ApiProperty({
    description: 'Type of the section',
    enum: SECTION_TYPE,
  })
  type?: SECTION_TYPE;
}
