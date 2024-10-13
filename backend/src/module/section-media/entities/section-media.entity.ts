import { Column, Entity, ManyToOne } from 'typeorm';
import { Section } from '../../section/entities/section.entity';
import { Base } from 'src/module/base/base.entity';

@Entity()
export class SectionMedia extends Base {
  @Column()
  mediaType: string;
  @Column()
  url: string;
  @ManyToOne(() => Section, (section) => section.media)
  section: Section;
}
