import { Character } from 'src/characters';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class House {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // Una House puede tener muchos Characters
  @OneToMany(() => Character, (character) => character.house, {
    cascade: ['soft-remove', 'recover'],
  })
  characters: Character[];
}
