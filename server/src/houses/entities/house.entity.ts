import { Character } from 'src/characters';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class House {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // Una House puede tener muchos Characters
  @OneToMany(() => Character, (character) => character.house, {
    // Este cascade ayuda a la recuperación en caso de delete
    cascade: ['soft-remove', 'recover'],
    nullable: true,
  })
  characters: Character[];
}
