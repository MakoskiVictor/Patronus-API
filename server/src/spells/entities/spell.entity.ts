import { Character } from 'src/characters';
import { User } from 'src/users';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Spell {
  @PrimaryGeneratedColumn('uuid')
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

  // Many Spells can be created by one User
  @ManyToOne(() => User, (user) => user.spells_created, {
    cascade: ['soft-remove', 'recover'],
  })
  created_by: User;
}
