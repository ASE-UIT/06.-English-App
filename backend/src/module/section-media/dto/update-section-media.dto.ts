import { PartialType } from '@nestjs/mapped-types';
import { CreateSectionMediaDto } from './create-section-media.dto';

export class UpdateSectionMediaDto extends PartialType(CreateSectionMediaDto) {}
