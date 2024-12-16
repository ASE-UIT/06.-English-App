import { PAYMENT_METHOD } from 'src/utils/constants';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Student } from '../../user/entities/student.entity';
import { Course } from 'src/module/course/entities/course.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class CourseBuying extends Base {
  @Column({
    type: 'enum',
    enum: PAYMENT_METHOD,
    default: PAYMENT_METHOD.QR_CODE,
  })
  @AutoMap()
  paymentMethod: PAYMENT_METHOD;
  @Column()
  @AutoMap()
  key: string;
  @Column('boolean', { default: false })
  @AutoMap()
  active: boolean;
  @ManyToOne(() => Student, (student) => student.courseBuyings)
  student: Student;
  @ManyToOne(() => Course, (course) => course.courseBuyings)
  course: Course;
}
