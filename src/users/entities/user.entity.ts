import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, name: 'username' })
  username: string;
  @Column({ unique: true, name: 'email' })
  email: string;
  // TODO:: AÑADIR ESTO CON AUTORIZACION
  // RECUERDA QUE TIENES QUE CAMBIARLO EN LOS DTOS TAMBIEN.
  // @Column({enum:["admin","worker"]})
  // role:string;
  @Column()
  password: string;

  //actions before insertions
  @BeforeInsert()
  async hashPass(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
