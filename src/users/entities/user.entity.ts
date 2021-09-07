import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ unique: true })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;

  @BeforeInsert()
  async hashPass() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePass(password: string) {
    return bcrypt.compare(password, this.password);
  }
}
