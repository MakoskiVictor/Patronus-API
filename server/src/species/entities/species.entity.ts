import { Character } from 'src/characters';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Species {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column('varchar')
  description: string;

  @DeleteDateColumn()
  deletedAt: Date;

  // Una Specie puede alvergar varios Characters
  @OneToMany(() => Character, (characters) => characters.specie, {
    cascade: ['soft-remove', 'recover'],
  })
  // Nombre de la columna
  characters: Character[];
}
