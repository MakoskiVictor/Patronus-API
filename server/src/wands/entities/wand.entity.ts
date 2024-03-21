import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Wand {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: true })
  wood: string;

  @Column({ type: 'varchar', nullable: true })
  core: string;

  @Column({ type: 'float', nullable: true })
  length: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
