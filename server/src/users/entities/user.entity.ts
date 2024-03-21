import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
