import { AlternateName } from 'src/alternate_names';
import { House } from 'src/houses';
import { Species } from 'src/species';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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
    // Este cascade ayuda a la recuperación en caso de delete
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  // Nombre de la Columna
  house: House;

  // Un Character puede tener varios Alternated_names
  @OneToMany(() => AlternateName, (alternatename) => alternatename.character, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  // Nombre de la Columna
  alternate_names: AlternateName[];

  // Un Character solo pertenece a una specie
  @OneToMany(() => Species, (specie) => specie.characters, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  specie: Species;
}
