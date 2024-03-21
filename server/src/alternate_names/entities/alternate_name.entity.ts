import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlternateName {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', array: true })
  name: string[];
}
