import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlternateName {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', array: true })
  name: string[];
}
