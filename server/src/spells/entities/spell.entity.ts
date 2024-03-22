import { Character } from 'src/characters';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Spell {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column('varchar')
  description: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // Many Spells can be known by mane characters
  @ManyToMany(() => Character, (characters) => characters.spells, {
    cascade: ['recover', 'soft-remove'],
  })
  //Nombre de la columna
  characters: Character[];
}
