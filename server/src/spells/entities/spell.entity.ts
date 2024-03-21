import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Spell {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string;
}
