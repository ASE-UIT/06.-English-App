import { Base } from '../../base/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Lesson } from './lesson.entity';
import { MEDIAS } from '../../../utils/constants';

@Entity()
export class LessonMedia extends Base {
  @Column()
  url: string;
  @Column({
    type: 'enum',
    enum: MEDIAS,
  })
  type: MEDIAS;
  @ManyToOne(() => Lesson, (lesson) => lesson.lessonMedias)
  lesson: Lesson;
}
