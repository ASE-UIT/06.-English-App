import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../base/base.entity';
import { LessonVocabulary } from './lesson-vocabulary.entity';
import { Grammar } from '../../grammar/entities/grammar.entity';
import { TYPES } from '../../../utils/constants';
import { Section } from 'src/module/section/entities/section.entity';
import { Course } from 'src/module/course/entities/course.entity';

@Entity()
export class Lesson extends Base {
  @Column()
  name: string;
  @Column()
  description: string;
  @Column('text')
  content: string;
  @Column({
    type: 'enum',
    enum: TYPES,
  })
  type: TYPES;

  @OneToMany(
    () => LessonVocabulary,
    (lessonVocabulary) => lessonVocabulary.lesson,
    {
      cascade: true,
    },
  )
  lessonVocabularies?: LessonVocabulary[];
  @OneToMany(() => Section, (section) => section.lesson)
  sections?: Section[];
  @ManyToMany(() => Grammar, (grammar) => grammar.lessons)
  grammars?: Grammar[];
  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;
}
