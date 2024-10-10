import { Base } from "src/module/base/base.entity";
import { State } from "src/module/base/util";
import { CourseCategory } from "src/module/course-category/entities/course-category.entity";
import { CourseReviewing } from "src/module/course-reviewing/entities/course-reviewing.entity";
import { Teacher } from "src/module/user/entities/teacher.entity";
import {
  Entity,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

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
    enum: State,
    default: State.DRAFT,
  })
  state: State;

  @ManyToOne(() => CourseCategory, (category) => category.course)
  category: CourseCategory;

  @OneToMany(() => CourseReviewing, (course_reviewing) => course_reviewing.course)
  course_reviewing: CourseReviewing[];
}


