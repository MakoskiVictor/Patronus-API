import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Spell {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column('varchar')
  description: string;
}
