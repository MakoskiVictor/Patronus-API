import { Character } from 'src/characters';
import { Spell } from 'src/spells';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  username: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'enum', default: 'user', nullable: true })
  rol: 'user' | 'admin';

  @DeleteDateColumn()
  deletedAt: Date;

  // One User can create many Characters
  @OneToMany(() => Character, (characters) => characters.created_by, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  characters_created: Character[];

  // One User can create many Spells
  @OneToMany(() => Spell, (spells) => spells.created_by, {
    cascade: ['soft-remove', 'recover'],
  })
  @JoinColumn()
  // Nombre de la columna
  spells_created: Spell[];
}
