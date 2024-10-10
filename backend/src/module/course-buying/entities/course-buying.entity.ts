import { PAYMENT_METHOD } from 'src/util/constants';
import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../../base/base.entity';
import { Student } from '../../user/entities/student.entity';

@Entity()
export class CourseBuying extends Base {
  @Column()
  courseId: string;

  @Column({
    type: 'enum',
    enum: PAYMENT_METHOD,
    default: PAYMENT_METHOD.QR_CODE,
  })
  paymentMethod: PAYMENT_METHOD;
  @Column()
  key: string;
  @Column('boolean', { default: true })
  active: boolean;
}
