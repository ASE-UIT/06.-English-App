import { Injectable } from '@nestjs/common';
import { CreateCourseBuyingDto } from './dto/update-course-buying.dto';
import { DataSource } from 'typeorm';
import { CourseBuying } from './entities/course-buying.entity';
import { Course } from '../course/entities/course.entity';
import { Student } from '../user/entities/student.entity';
import { HttpException } from '@nestjs/common';

@Injectable()
export class CourseBuyingService {
  courseBuyingRepository: any;
  constructor(private readonly dataSource: DataSource) {}

  async create(createCourseBuyingDto: CreateCourseBuyingDto) {
    const courseBuying = this.dataSource.getRepository(CourseBuying).create(createCourseBuyingDto);
    return await this.dataSource.getRepository(CourseBuying).save(courseBuying);
  }

  async findAll() {
    return await this.dataSource.getRepository(CourseBuying).find({ relations: ['course', 'student'] });
  }

  async findOne(id: number) {
    // Chuyển đổi id sang string nếu cần
    const courseBuying = await this.courseBuyingRepository.findOne({
      where: { id: id.toString() }, // Chuyển đổi sang chuỗi
      relations: ['course', 'student'], // Thêm các mối quan hệ cần thiết
    });

    if (!courseBuying) {
      throw new HttpException('Course buying not found', 404);
    }

    return courseBuying; // Trả về courseBuying tìm thấy
  }

  async update(id: number, updateCourseBuyingDto: CreateCourseBuyingDto) {
    await this.dataSource.getRepository(CourseBuying).update(id, updateCourseBuyingDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.dataSource.getRepository(CourseBuying).delete(id);
    if (result.affected === 0) {
      throw new HttpException('Course buying not found', 404);
    }
    return { deleted: true };
  }
}
