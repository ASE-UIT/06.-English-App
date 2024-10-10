import { Injectable } from '@nestjs/common';
import { CreateSectionMediaDto } from './dto/create-section-media.dto';
import { UpdateSectionMediaDto } from './dto/update-section-media.dto';

@Injectable()
export class SectionMediaService {
  create(createSectionMediaDto: CreateSectionMediaDto) {
    return 'This action adds a new sectionMedia';
  }

  findAll() {
    return `This action returns all sectionMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sectionMedia`;
  }

  update(id: number, updateSectionMediaDto: UpdateSectionMediaDto) {
    return `This action updates a #${id} sectionMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} sectionMedia`;
  }
}
