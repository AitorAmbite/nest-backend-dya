import { Budget } from 'src/budgets/entities/budget.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Budgetfurniture {
  //TODO: AÑADIR LOS CAMPOS ETC.
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
  @Column()
  fillingdrawer:number;
  @Column({ type: 'double' })
  price: number;
  @Column()
  type: string;
  @ManyToOne(() => Budget, (budget) => budget.furniture)
  budget: Budget;
}
