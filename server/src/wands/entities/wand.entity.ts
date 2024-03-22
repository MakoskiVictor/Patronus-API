import { Character } from 'src/characters';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Wand {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: true })
  wood: string;

  @Column({ type: 'varchar', nullable: true })
  core: string;

  @Column({ type: 'float', nullable: true })
  length: number;

  @DeleteDateColumn()
  deletedAt: Date;

  // One Wand can only belong to one Character
  @OneToOne(() => Character, (character) => character.wand, {
    cascade: ['soft-remove', 'recover'],
  })
  // Column name
  character: Character;
}
