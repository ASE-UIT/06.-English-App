import { Medias } from 'src/module/base/util';
import { Base } from '../../base/base.entity';
import { Column, ManyToOne } from 'typeorm';
import { Lesson } from './lesson.entity';

export class LessonMedia extends Base {
  @Column()
  url: string;
  @Column({
    type: 'enum',
    enum: Medias,
  })
  type: Medias;
  @ManyToOne(() => Lesson, (lesson) => lesson.lessonMedias)
  lesson: Lesson;
}
