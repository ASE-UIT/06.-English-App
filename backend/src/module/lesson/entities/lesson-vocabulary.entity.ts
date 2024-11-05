import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Lesson } from './lesson.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class LessonVocabulary extends Base {
  @Column()
  @AutoMap()
  vocabulary: string;
  @Column('text')
  @AutoMap()
  note: string;
  @ManyToOne(() => Lesson, (lesson) => lesson.lessonVocabularies)
  lesson: Lesson;
}
