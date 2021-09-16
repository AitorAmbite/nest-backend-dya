import { Budgetfurniture } from 'src/budgetfurnitures/entities/budgetfurniture.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Budget {
  //Fields
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true, nullable: false })
  bl_id: string;
  @Column({ nullable: false })
  address: string;
  @Column({ nullable: false })
  price: number;
  @Column()
  carriage:number;
  @Column()
  extras:number;
  @Column()
  phone: number;

  //relationships
  @OneToMany(() => Budgetfurniture, (budgetfurniture) => budgetfurniture.budget)
  furniture: Budgetfurniture[];
}
