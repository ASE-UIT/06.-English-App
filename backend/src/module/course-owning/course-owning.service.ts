import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CourseOwning } from './entities/course-owning.entity';
import { Student } from '../user/entities/student.entity';
import { Course } from '../course/entities/course.entity';
import { CourseProgress } from './entities/course-progress.entity';
import { LessonProgress } from './entities/lesson-progress.entity';
import { SectionProgress } from './entities/section-progress.entity';

@Injectable()
export class CourseOwningService {
  constructor(private readonly dataSource: DataSource) {}
  async active(courseOwning: CourseOwning, userAwsId: string) {
    try {
      const student = await this.dataSource.getRepository(Student).findOne({
        where: { id: userAwsId },
      });
      const course = await this.dataSource.getRepository(Course).findOne({
        where: { id: courseOwning.course.id },
      });
      courseOwning.course = course;
      courseOwning.student = student;
      await this.dataSource.transaction(async (manager) => {
        const newCourseOwning = await manager
          .getRepository(CourseOwning)
          .save(courseOwning);

        const newCourseProgress = await manager
          .getRepository(CourseProgress)
          .save({
            courseOwning: newCourseOwning,
            course: course,
          });
        await Promise.all(
          courseOwning.course.lessons.map(async (lesson) => {
            const newLessonProgress = await manager
              .getRepository(LessonProgress)
              .save({
                courseProgress: newCourseProgress,
                lesson: lesson,
              });
            await Promise.all(
              lesson.sections.map(async (section) => {
                await manager.getRepository(SectionProgress).save({
                  lessonProgress: newLessonProgress,
                  section: section,
                });
              }),
            );
          }),
        );
        return newCourseOwning;
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  findAll() {
    return `This action returns all courseOwning`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseOwning`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseOwning`;
  }
}
