import { Injectable } from '@nestjs/common';
import { CreateCourseBuyingDto } from './dto/create-course-buying.dto';
import { UpdateCourseBuyingDto } from './dto/update-course-buying.dto';

@Injectable()
export class CourseBuyingService {
  create(createCourseBuyingDto: CreateCourseBuyingDto) {
    return 'This action adds a new courseBuying';
  }

  findAll() {
    return `This action returns all courseBuying`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseBuying`;
  }

  update(id: number, updateCourseBuyingDto: UpdateCourseBuyingDto) {
    return `This action updates a #${id} courseBuying`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseBuying`;
  }
}
