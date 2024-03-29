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

  @Column({
    type: 'enum',
    enum: ['user', 'admin'],
    default: 'user',
    nullable: true,
  })
  rol: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // One User can create many Characters
  @OneToMany(() => Character, (characters) => characters.created_by, {
    cascade: ['soft-remove', 'recover'],
    eager: true,
  })
  @JoinColumn()
  characters_created: Character[];

  // One User can create many Spells
  @OneToMany(() => Spell, (spells) => spells.created_by, {
    cascade: ['soft-remove', 'recover'],
    eager: true,
  })
  @JoinColumn()
  // Nombre de la columna
  spells_created: Spell[];
}
