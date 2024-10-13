import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Lesson } from './lesson.entity';

@Entity()
export class LessonVocabulary extends Base {
  @Column()
  vocabulary: string;
  @Column('text')
  note: string;
  @ManyToOne(() => Lesson, (lesson) => lesson.lessonVocabularies)
  lesson: Lesson;
}
