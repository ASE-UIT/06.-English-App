import { PAYMENT_METHOD } from 'src/util/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CourseBuying {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  courseId: string;
  @Column()
  studentId: string;
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
