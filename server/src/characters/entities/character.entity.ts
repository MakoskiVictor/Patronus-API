import { House } from 'src/houses';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'enum', default: 'unknown', nullable: true })
  gender: 'male' | 'female' | 'unknown';

  @Column({ type: 'date', default: null, nullable: true })
  date_of_birth: string;

  @Column({ type: 'boolean', nullable: false })
  wizard: boolean;

  @Column({ type: 'varchar', nullable: true, default: 'unknown' })
  patronus: string;

  @Column({ type: 'boolean', nullable: false })
  hogwarts_student: boolean;

  @Column({ type: 'boolean', nullable: false })
  hogwarts_staff: boolean;

  @Column({ type: 'varchar', nullable: false })
  actor: string;

  @Column({ type: 'boolean', nullable: false })
  alive: boolean;

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // Varios Characters puede pertenecer a una House
  @ManyToOne(() => House, (house) => house.characters, {
    cascade: ['soft-remove', 'recover'],
  })
  house: House;
}
