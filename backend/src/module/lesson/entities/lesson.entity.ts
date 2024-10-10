import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Types } from '../../base/util';
import { LessonMedia } from './lesson_media.entity';
import { LessonVocabulary } from './lesson_vocabulary.entity';
import { Grammar } from '../../grammar/entities/grammar.entity';

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
    enum: Types,
  })
  type: Types;

  @OneToMany(() => LessonMedia, (lessonMedia) => lessonMedia.lesson, {
    cascade: true,
  })
  lessonMedias?: LessonMedia[];

  @OneToMany(
    () => LessonVocabulary,
    (lessonVocabulary) => lessonVocabulary.lesson,
    {
      cascade: true,
    },
  )
  lessonVocabularies?: LessonVocabulary[];
  @ManyToMany(() => Grammar, (grammar) => grammar.lessons)
  grammars?: Grammar[];
}
