import { Budget } from 'src/budgets/entities/budget.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Budgetfurniture {
  //TODO: AÑADIR LOS CAMPOS ETC.
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Budget, (budget) => budget.furniture)
  budget: Budget;
}
