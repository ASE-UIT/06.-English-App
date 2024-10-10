import { Base } from '../../base/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Lesson } from '../../lesson/entities/lesson.entity';

@Entity()
export class Grammar extends Base {
  @Column()
  title: string;
  @Column()
  description: string;
  @Column('text')
  content: string;
  @ManyToMany(() => Lesson, (lesson) => lesson.grammars)
  lessons?: Lesson[];
}
