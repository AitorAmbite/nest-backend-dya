import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;

  //actions before insertions 
  @BeforeInsert()
  async hashPass(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  //actions of the entity
  async validatePass(password: string) {
    return bcrypt.compare(password, this.password);
  }

  constructor(userId: number, username: string, password: string) {
    this.id = userId;
    this.username = username;
    this.password = password;
  }
}
