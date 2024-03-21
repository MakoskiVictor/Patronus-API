import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'enum', default: null, nullable: true })
  gender: 'male' | 'female' | null;

  @Column({ type: 'date', default: null, nullable: true })
  date_of_birth: string;

  @Column({ type: 'boolean', nullable: false })
  wizard: boolean;

  @Column({ type: 'varchar', nullable: true })
  patronus: string;

  @Column({ type: 'boolean', nullable: false })
  hogwarts_student: boolean;

  @Column({ type: 'boolean', nullable: false })
  hogwarts_staff: boolean;

  @Column({ type: 'varchar', nullable: true })
  actor: string;

  @Column({ type: 'boolean', nullable: false })
  alive: boolean;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
