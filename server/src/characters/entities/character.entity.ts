import { AlternateName } from 'src/alternate_names';
import { House } from 'src/houses';
import { Species } from 'src/species';
import { Spell } from 'src/spells';
import { User } from 'src/users';
import { Wand } from 'src/wands';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
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
  @ManyToOne(() => Species, (specie) => specie.characters, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  specie: Species;

  // Many Characters can know many Spells
  @ManyToMany(() => Spell, (spells) => spells.characters, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  spells: Spell[];

  // Many characters can be created by one user
  @ManyToOne(() => User, (user) => user.characters_created, {
    cascade: ['soft-remove', 'recover'],
  })
  created_by: User;

  // One Character can have one Wand
  @OneToOne(() => Wand, (wand) => wand.character, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  wand: Wand;
}
