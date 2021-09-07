import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Budget } from '../../budgets/entities/Budget.entity'
export class Budgetfurniture {
    //TODO: AÑADIR LOS CAMPOS ETC.

    @ManyToOne(() => Budget, budget => budget.budgetfurniture)
    budget: Budget;
}
