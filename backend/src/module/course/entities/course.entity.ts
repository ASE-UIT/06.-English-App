import { Base } from 'src/module/base/base.entity';
import { CourseBuying } from 'src/module/course-buying/entities/course-buying.entity';
import { CourseCategory } from 'src/module/course-category/entities/course-category.entity';
import { CourseOwning } from 'src/module/course-owning/entities/course-owning.entity';
import { CourseReviewing } from 'src/module/course-reviewing/entities/course-reviewing.entity';
import { CourseViewing } from 'src/module/course-viewing/entities/course-viewing.entity';
import { FeedBack } from 'src/module/feed-back/entities/feed-back.entity';
import { Lesson } from 'src/module/lesson/entities/lesson.entity';
import { Teacher } from 'src/module/user/entities/teacher.entity';
import { STATE } from 'src/utils/constants';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Course extends Base {
  @Column()
  description: string;

  @Column()
  title: string;

  @Column('bigint')
  price: number;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;

  @Column({
    type: 'enum',
    enum: STATE,
    default: STATE.DRAFT,
  })
  state: STATE;

  @ManyToOne(() => CourseCategory, (category) => category.course)
  category: CourseCategory;

  @OneToMany(() => CourseReviewing, (courseReviewing) => courseReviewing.course)
  courseReviewings: CourseReviewing[];

  @OneToMany(() => CourseViewing, (courseViewing) => courseViewing.course)
  courseViewings: CourseViewing[];

  @OneToMany(() => CourseOwning, (courseOwning) => courseOwning.course)
  courseOwnings: CourseOwning[];

  @OneToMany(() => CourseBuying, (courseBuying) => courseBuying.course)
  courseBuyings: CourseBuying[];

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];

  @OneToMany(() => FeedBack, (feedBack) => feedBack.course)
  feedBacks: FeedBack[];
}
