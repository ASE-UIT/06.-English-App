import { USER_ROLES } from 'src/utils/constants';
import { Base } from '../../base/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { LessonDiscussion } from 'src/module/lesson-discussion/entities/lesson-discussion.entity';

@Entity()
export class User extends Base {
  @AutoMap()
  @Column({
    type: 'enum',
    enum: USER_ROLES,
  })
  role: USER_ROLES;
  @AutoMap()
  @Column({
    nullable: true,
  })
  firstName?: string;
  @AutoMap()
  @Column({
    nullable: true,
  })
  lastName?: string;
  @AutoMap()
  @Column()
  email: string;
  @AutoMap()
  @Column({
    nullable: true,
  })
  phone?: string;
  @AutoMap()
  @Column({
    nullable: true,
  })
  birthDate?: Date;
  @AutoMap()
  @Column({
    nullable: true,
  })
  avatarURL?: string;
  @AutoMap()
  @Column()
  awsCognitoId: string;

  @OneToMany(() => LessonDiscussion, (lessonDiscussion) => lessonDiscussion.user)
  lessonDiscussions: LessonDiscussion[];
}
