import { Character } from 'src/characters';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AlternateName {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: true })
  name: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Character, (character) => character.alternate_names, {
    cascade: ['soft-remove', 'recover'],
  })
  character: Character;
}
