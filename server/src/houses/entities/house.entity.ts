import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class House {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;
}
