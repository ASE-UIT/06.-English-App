import { PartialType } from '@nestjs/mapped-types';
import { CreateSectionDto } from './create-section.dto';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSectionDto extends PartialType(CreateSectionDto) {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id of the section',
    type: String,
  })
  id: string;
}
