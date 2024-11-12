import { Base } from "src/module/base/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { LessonDiscussion } from "./lesson-discussion.entity";
import { User } from "src/module/user/entities/user.entity";

@Entity()
export class LessonDiscussionReply extends Base {
  @Column()
  content: string;

  @ManyToOne(() => LessonDiscussion, (lessonDiscussion) => lessonDiscussion.lessonDiscussionReplies)
  lessonDiscussion: LessonDiscussion;

  @ManyToOne(() => User, (user) => user.lessonDiscussionReplies)
  user: User;
}