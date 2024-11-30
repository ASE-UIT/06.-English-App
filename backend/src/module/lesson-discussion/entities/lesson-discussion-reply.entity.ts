import { Base } from "src/module/base/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { LessonDiscussion } from "./lesson-discussion.entity";
import { User } from "src/module/user/entities/user.entity";
import { AutoMap } from "@automapper/classes";

@Entity()
export class LessonDiscussionReply extends Base {
  @AutoMap()
  @Column()
  content: string;

  @ManyToOne(() => LessonDiscussion, (lessonDiscussion) => lessonDiscussion.lessonDiscussionReplies)
  lessonDiscussion: LessonDiscussion;

  @ManyToOne(() => User, (user) => user.lessonDiscussionReplies)
  user: User;
}