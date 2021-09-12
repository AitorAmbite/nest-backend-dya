import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Furniture {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  high: number;
  @Column()
  width: number;
  @Column()
  back: number;
  @Column()
  drawer: number;
  @Column({ type: 'double' })
  price: number;
  @Column()
  type: string;
}
