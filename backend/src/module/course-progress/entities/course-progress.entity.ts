import { STATUS } from 'src/util/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseProgress {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  studentId: string;
  @Column()
  courseId: string;
  @Column({
    type: 'enum',
    enum: STATUS,
    default: STATUS.NOT_STARTED,
  })
  status: STATUS;
  @Column()
  percent: number;
}
