import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SectionMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  mediaType: string;
  @Column()
  url: string;
}
