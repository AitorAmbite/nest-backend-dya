import { Budgetfurniture } from 'src/budgetfurnitures/entities/budgetfurniture.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Budget {
  //Fields
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false })
  bl_id: string;
  @Column()
  name: string;
  @Column({ nullable: false })
  address: string;
  @Column({ nullable: false, type:"float8" })
  price: number;
  @Column()
  carriage: number;
  @Column()
  extras: number;
  @Column()
  unero:number;
  @Column()
  phone: number;

  //relationships
  @OneToMany(
    () => Budgetfurniture,
    (budgetfurniture) => budgetfurniture.budget,
    { cascade: true },
  )
  @JoinTable()
  furniture?: Budgetfurniture[];
}
