import { AutoMap } from "@automapper/classes";
import { Base } from "src/module/base/base.entity";
import { Lesson } from "src/module/lesson/entities/lesson.entity";
import { User } from "src/module/user/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class LessonDiscussion extends Base {
  @AutoMap()
  @Column()
  title: string;
  
  @AutoMap()
  @Column()
  content: string;
  
  @ManyToOne(() => Lesson, (lesson) => lesson.lessonDiscussions)
  lesson: Lesson;

  @ManyToOne(() => User, (user) => user.lessonDiscussions)
  user: string;
}
